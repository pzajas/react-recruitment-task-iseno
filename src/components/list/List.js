import styled from "styled-components"
import Movie from "./Movie"

const StyledListContainer = styled.div`
  color: white;
  width: 70%;

  li {
    display: flex;
    justify-content: center;
    background-color: #353535;
    margin-bottom: 0.5rem;
  }
`

const List = ({ moviesList, className }) => {
  return (
    <StyledListContainer className={className}>
      {moviesList.map(item => (
        <li key={item.id}>
          <Movie item={item} />
        </li>
      ))}
    </StyledListContainer>
  )
}

export default List
