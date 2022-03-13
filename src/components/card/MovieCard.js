import { useState } from "react"
import styled from "styled-components"
import StarButton from "../../elements/buttons/StarButton"

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 46rem;
  width: 20rem;
  background-color: green;

  /* img {
    width: 50%;
  } */
`

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.2rem;
`

const StyledStarButton = styled(StarButton)`
  cursor: pointer;
  color: white;

  &:hover {
    color: gold;
  }
`

const MovieCard = ({
  setSumOfVotePoints,
  setNumberOfVotes,
  sumOfVotePoints,
  numberOfVotes,
  setAverageMovieScore,
  setIsModalVisible,
  movie,
}) => {
  const stars = [<StarButton />, <StarButton />, <StarButton />, <StarButton />, <StarButton />]

  const handleVote = index => {
    setNumberOfVotes(numberOfVotes + 1)
    setSumOfVotePoints((sumOfVotePoints += index + 1))
  }

  const saveVote = () => {
    setAverageMovieScore(sumOfVotePoints / numberOfVotes)
    setIsModalVisible(false)

    console.log(sumOfVotePoints, numberOfVotes)
  }

  return (
    <StyledCardContainer>
      <StyledTitleContainer>
        {movie.title}
        <StyledButtonContainer>
          {stars.map((_, index) => (
            <div key={index} onClick={() => handleVote(index)}>
              <StyledStarButton />
            </div>
          ))}
        </StyledButtonContainer>
      </StyledTitleContainer>

      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
      <div>{movie.overview}</div>
      <button onClick={saveVote}>Save Vote</button>
    </StyledCardContainer>
  )
}

export default MovieCard
