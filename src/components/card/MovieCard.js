import React from "react"

const MovieCard = ({ setIsModalVisible, movie }) => {
  return (
    <div>
      <div>{movie.title}</div>
      <button onClick={() => setIsModalVisible(false)}>Back</button>
    </div>
  )
}

export default MovieCard
