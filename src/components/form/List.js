import Movie from "./Movie"

const List = ({ moviesList }) => {
  return (
    <div>
      {moviesList.map(item => (
        <li key={item.id}>
          <Movie item={item} />
        </li>
      ))}
    </div>
  )
}

export default List
