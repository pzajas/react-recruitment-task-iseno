import { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"
import StarButton from "../../elements/buttons/StarButton"
import MovieCard from "../card/MovieCard"

// import Modal from "react-modal"

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

const Movie = ({ item, children }) => {
  const stars = [<StarButton />, <StarButton />, <StarButton />, <StarButton />, <StarButton />]

  let [numberOfVotes, setNumberOfVotes] = useState(0)
  let [sumOfVotePoints, setSumOfVotePoints] = useState(0)
  let [averageMovieScore, setAverageMovieScore] = useState(0)
  let [movieCast, setMovieCast] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleVote = index => {
    setNumberOfVotes(numberOfVotes + 1)
    setSumOfVotePoints((sumOfVotePoints += index + 1))
  }

  const handleFetchMovieCast = () => {
    fetch(`https://api.themoviedb.org/3/movie/${item.id}/credits?api_key=46e56d3f76c06d160ec38e2e58d674ef`)
      .then(response => response.json())
      .then(credits => setMovieCast(credits.cast))
  }

  const handleIsModalVisible = () => {
    setIsModalVisible(true)
  }

  averageMovieScore = numberOfVotes !== 0 ? (sumOfVotePoints / numberOfVotes).toFixed(3) : "No score"

  return (
    <StyledMovieContainer style={{ cursor: "pointer" }}>
      <div onClick={handleIsModalVisible}>{item.title}</div>
      <Modal isOpen={isModalVisible}>
        <MovieCard setIsModalVisible={setIsModalVisible} movie={item} />
      </Modal>
      <div>
        <div onClick={handleFetchMovieCast}>xxx</div>
        {movieCast.map(actor => (
          <li>{actor.name}</li>
        ))}
      </div>
      {item.release_date.split("-").reverse().join("-")}
      ---
      {averageMovieScore}
      {stars.map((_, index) => (
        <StyledButtonContainer key={index} onClick={() => handleVote(index)}>
          <StyledStarButton onClick={() => handleVote(index)} />
        </StyledButtonContainer>
      ))}
    </StyledMovieContainer>
  )
}

export default Movie
