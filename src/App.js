import { useState } from "react"
import styled from "styled-components"
import Form from "./components/form/Form"
import List from "./components/list/List"

const StyledApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 2rem;
  height: 10rem;
`

function App() {
  const [moviesList, setMoviesList] = useState([])
  const [input, setInput] = useState("")

  let [movieCast, setMovieCast] = useState([])

  const API_KEY = "46e56d3f76c06d160ec38e2e58d674ef"

  const handleOnChange = e => {
    setInput(e.target.value)
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`)
      .then(response => response.json())
      .then(data => setMoviesList(data.results))

    setInput("")

    console.log(moviesList)
  }

  return (
    <StyledApplicationContainer>
      <Form handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} input={input} />
      <List moviesList={moviesList} />
    </StyledApplicationContainer>
  )
}

export default App
