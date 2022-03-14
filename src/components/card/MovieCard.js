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
  }

  img {
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

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  right: 0;
`

const StyledDescriptionContainer = styled.div`
  color: white;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
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
  const stars = Array(5).fill(<StarButton />)

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
        <div>{movie.title}</div>
        <StyledButtonContainer>
          {stars.map((_, index) => (
            <div key={index} onClick={() => handleVote(index)}>
              <StyledStarButton />
            </div>
          ))}
        </StyledButtonContainer>
      </StyledTitleContainer>

      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
      <StyledDescriptionContainer>{movie.overview}</StyledDescriptionContainer>
      <button onClick={saveVote}>Save Vote</button>
    </StyledCardContainer>
  )
}

export default MovieCard
