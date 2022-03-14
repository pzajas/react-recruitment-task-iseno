import { useState } from "react"
import styled from "styled-components"
import StarButton from "../../elements/buttons/StarButton"

const StyledCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 46rem;
  width: 20rem;
  background-color: #181818;
  border: solid 1px white;

  & * {
    font-family: "Poppins", sans-serif;
  }

  button {
    border: none;
    height: 2rem;
    position: absolute;
    top: 92%;
    cursor: pointer;
  }

  img {
    position: relative;
    margin-bottom: 1rem;
  }
`

const StyledTitleContainer = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const StyledStarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  right: 0;
`
const StyledStarButton = styled(StarButton)`
  cursor: pointer;
  color: white;

  &:hover {
    color: gold;
  }
`

const StyledDescriptionContainer = styled.div`
  color: white;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`

const StyledMovieCastContainer = styled.div`
  color: white;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`

const MovieCard = ({
  setSumOfVotePoints,
  setNumberOfVotes,
  sumOfVotePoints,
  numberOfVotes,
  setAverageMovieScore,
  setIsModalVisible,
  movie,
  setLastVote,
  isCastVisible,
  setIsCastVisible,
}) => {
  const [movieCast, setMovieCast] = useState([])
  const stars = Array(5).fill(<StarButton />)

  const handleVote = index => {
    setNumberOfVotes(numberOfVotes + 1)
    setSumOfVotePoints((sumOfVotePoints += index + 1))
    setLastVote([movie.title, index + 1])
  }

  const saveVote = () => {
    setAverageMovieScore(sumOfVotePoints / numberOfVotes)
    setIsModalVisible(false)
  }

  const showCastList = () => {
    if (!isCastVisible) {
      fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=46e56d3f76c06d160ec38e2e58d674ef`)
        .then(response => response.json())
        .then(credits => setMovieCast(credits.cast))
      setIsCastVisible(!isCastVisible)
    } else setIsCastVisible(!isCastVisible)
  }

  return (
    <StyledCardContainer>
      <StyledTitleContainer>
        <div>{movie.title}</div>
        <StyledStarsContainer>
          {stars.map((_, index) => (
            <div key={index} onClick={() => handleVote(index)}>
              <StyledStarButton />
            </div>
          ))}
        </StyledStarsContainer>
      </StyledTitleContainer>

      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />

      {isCastVisible ? (
        <StyledMovieCastContainer>
          {movieCast.map(actor => (
            <li key={actor.name}>{actor.name}</li>
          ))}
        </StyledMovieCastContainer>
      ) : (
        <StyledDescriptionContainer>{movie.overview}</StyledDescriptionContainer>
      )}

      <button onClick={saveVote}>Save Vote</button>
      <button onClick={showCastList} style={{ position: "absolute", right: "0", marginRight: "2rem" }}>
        {isCastVisible ? "Overview" : "Show Cast"}
      </button>
    </StyledCardContainer>
  )
}

export default MovieCard
