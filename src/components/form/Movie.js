const Movie = ({ item }) => {
  return (
    <div>
      {item.title}
      {item.release_date.split("-").reverse().join("-")}
    </div>
  )
}

export default Movie
