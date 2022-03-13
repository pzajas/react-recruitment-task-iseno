import { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"
import MovieCard from "../card/MovieCard"

// import Modal from "react-modal"

const StyledMovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`

const StyledModalContainer = styled(Modal)`
  padding: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Movie = ({ item }) => {
  let [movieCast, setMovieCast] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  let [averageMovieScore, setAverageMovieScore] = useState(0)
  let [sumOfVotePoints, setSumOfVotePoints] = useState(0)
  let [numberOfVotes, setNumberOfVotes] = useState(0)

  // const handleFetchMovieCast = () => {
  //   fetch(`https://api.themoviedb.org/3/movie/${item.id}/credits?api_key=46e56d3f76c06d160ec38e2e58d674ef`)
  //     .then(response => response.json())
  //     .then(credits => setMovieCast(credits.cast))
  // }

  const handleIsModalVisible = () => {
    setIsModalVisible(true)
  }

  return (
    <StyledMovieContainer style={{ cursor: "pointer" }}>
      <div onClick={handleIsModalVisible}>{item.title}</div>
      <StyledModalContainer isOpen={isModalVisible}>
        <MovieCard
          sumOfVotePoints={sumOfVotePoints}
          numberOfVotes={numberOfVotes}
          setSumOfVotePoints={setSumOfVotePoints}
          setNumberOfVotes={setNumberOfVotes}
          setIsModalVisible={setIsModalVisible}
          averageMovieScore={averageMovieScore}
          setAverageMovieScore={setAverageMovieScore}
          movie={item}
        />
      </StyledModalContainer>
      <div>
        {/* <div onClick={handleFetchMovieCast}>xxx</div> */}
        {movieCast.map(actor => (
          <li>{actor.name}</li>
        ))}
      </div>
      {item.release_date.split("-").reverse().join("-")}
      ---
      {sumOfVotePoints === 0 ? "No votes" : averageMovieScore.toFixed(3)}
    </StyledMovieContainer>
  )
}

export default Movie
