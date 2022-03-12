import React from "react"

const Form = ({ handleOnSubmit, handleOnChange, input }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <input value={input} onChange={handleOnChange} />
      <button>Submit</button>
    </form>
  )
}

export default Form
