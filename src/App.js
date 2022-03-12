import "./App.css"

import { useState } from "react"
import Form from "./components/form/Form"
import List from "./components/form/List"

function App() {
  const [moviesList, setMoviesList] = useState([])
  const [input, setInput] = useState("")

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
  }

  return (
    <div className="App">
      <Form handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} input={input} />
      <List moviesList={moviesList} />
    </div>
  )
}

export default App
