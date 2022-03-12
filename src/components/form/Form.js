import styled from "styled-components"

const StyledFormContainer = styled.form`
  display: flex;
  padding: 2rem;
`

const Form = ({ handleOnSubmit, handleOnChange, input }) => {
  return (
    <StyledFormContainer onSubmit={handleOnSubmit}>
      <input value={input} onChange={handleOnChange} />
      <button>Submit</button>
    </StyledFormContainer>
  )
}

export default Form
