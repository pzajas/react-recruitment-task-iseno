import { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"
import MovieCard from "../card/MovieCard"

const StyledMovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 0.5rem;
`

const StyledDataContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  p {
    margin: 0;
  }

  div {
    text-align: right;
  }
`

const StyledModalContainer = styled(Modal)`
  padding: 0 10rem;
  height: 100%;
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
      <StyledModalContainer isOpen={isModalVisible} style={{ overlay: { backgroundColor: "rgba(22, 22, 22, 0.9)" } }}>
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
      <StyledDataContainer>
        <p onClick={handleIsModalVisible}>{item.title}</p>
        <div>{item.release_date.split("-").reverse().join("-")}</div>
        <div> {sumOfVotePoints === 0 ? "No votes" : averageMovieScore.toFixed(3)}</div>
      </StyledDataContainer>
    </StyledMovieContainer>
  )
}

{
  /* <div>
        {movieCast.map(actor => (
          <li>{actor.name}</li>
        ))}
      </div> */
}

export default Movie
