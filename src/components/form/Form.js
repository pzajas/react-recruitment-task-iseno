import styled from "styled-components"

const StyledFormContainer = styled.form`
  display: flex;
  padding: 2rem;
  width: 70%;

  input {
    width: 100%;
    height: 2rem;
    outline: none;
    border: none;
  }

  button {
    border: none;
    background-color: gold;
    cursor: pointer;
  }
`

const Form = ({ handleOnSubmit, handleOnChange, input }) => {
  return (
    <StyledFormContainer onSubmit={handleOnSubmit}>
      <input value={input} onChange={handleOnChange} />
      <button>Search</button>
    </StyledFormContainer>
  )
}

export default Form
