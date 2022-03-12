import styled from "styled-components"
import Movie from "./Movie"

const StyledListContainer = styled.div`
  color: white;

  li {
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    background-color: #353535;
    margin-bottom: 0.5rem;
  }
`

const List = ({ moviesList }) => {
  return (
    <StyledListContainer>
      {moviesList.map(item => (
        <li key={item.id}>
          <Movie item={item} />
        </li>
      ))}
    </StyledListContainer>
  )
}

export default List
