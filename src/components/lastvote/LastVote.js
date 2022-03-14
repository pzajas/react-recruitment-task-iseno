import { useState } from "react"
import styled from "styled-components"

const StyledLastVooteContainer = styled.div`
  background-color: gold;
  color: black;
  width: 70%;
  height: 1.5rem;

  div {
    font-weight: bold;
  }

  & * {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
  }
`

const LastVote = ({ lastVote }) => {
  return (
    <StyledLastVooteContainer>
      <div>
        Your last vote:
        {lastVote.map(item => (
          <li>{item}</li>
        ))}
      </div>
    </StyledLastVooteContainer>
  )
}

export default LastVote
