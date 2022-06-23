import React from "react";

function Form({ handleChange, handleSubmit, input, count }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={input}
        placeholder="Enter guest to list"
        className="form-input"
      />
      <button type="submit">Submit</button>
      <h3>{count} confirmed guests</h3>
    </form>
  );
}

export default Form;
