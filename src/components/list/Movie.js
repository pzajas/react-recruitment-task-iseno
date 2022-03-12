import { useState } from "react"
import styled from "styled-components"
import StarButton from "../../elements/buttons/StarButton"

const StyledMovieContainer = styled.div`
  display: flex;
`

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem;
`
const StyledStarButton = styled(StarButton)`
  cursor: pointer;
`

const Movie = ({ item }) => {
  const stars = [<StarButton />, <StarButton />, <StarButton />, <StarButton />, <StarButton />]

  let [numberOfVotes, setNumberOfVotes] = useState(0)
  let [sumOfVotePoints, setSumOfVotePoints] = useState(0)
  let [averageMovieScore, setAverageMovieScore] = useState(0)

  const handleVote = index => {
    setNumberOfVotes(numberOfVotes + 1)
    setSumOfVotePoints((sumOfVotePoints += index + 1))
  }

  averageMovieScore = numberOfVotes !== 0 ? (sumOfVotePoints / numberOfVotes).toFixed(3) : "No score"

  return (
    <StyledMovieContainer style={{ cursor: "pointer" }} onClick={() => console.log(item.id)}>
      {item.title}
      ---
      {item.release_date.split("-").reverse().join("-")}
      ---
      {/* {numberOfVotes}
      {sumOfVotePoints} */}
      ---
      {averageMovieScore}
      {stars.map((button, index) => (
        <StyledButtonContainer onClick={() => handleVote(index)}>
          <StyledStarButton onClick={() => handleVote(index)} />
        </StyledButtonContainer>
      ))}
    </StyledMovieContainer>
  )
}

export default Movie
