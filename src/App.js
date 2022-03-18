import { useEffect, useState } from "react"
import styled from "styled-components"
import Form from "./components/form/Form"
import LastVote from "./components/lastvote/LastVote"
import Movies from "./components/movies/Movies"

console.log(process.env)

const StyledApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 2rem;
  height: 10rem;

  & * {
    font-family: "Poppins", sans-serif;
  }
`

const StyledListContainer = styled(Movies)``

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [moviesList, setMoviesList] = useState([])
  const [lastVote, setLastVote] = useState([])

  const API_KEY = "46e56d3f76c06d160ec38e2e58d674ef"

  useEffect(() => {
    localStorage.setItem("lastVote", JSON.stringify(lastVote))
  }, [lastVote])

  const handleOnChange = e => {
    setSearchInput(e.target.value)
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchInput}`)
      .then(response => response.json())
      .then(data => setMoviesList(data.results))

    setSearchInput("")
  }

  return (
    <StyledApplicationContainer>
      <Form handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} input={searchInput} />
      <StyledListContainer moviesList={moviesList} lastVote={lastVote} setLastVote={setLastVote} />
      <LastVote lastVote={lastVote} />
    </StyledApplicationContainer>
  )
}

export default App
