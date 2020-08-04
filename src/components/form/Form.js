import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <form>
      <input
        type="text"
        name="ghname"
        placeholder="GitHub Username"
        onChange={props.update}
      />
      <input
        type="text"
        name="repo"
        placeholder="GitHub repo name"
        onChange={props.update}
      />
    </form>
  );
}

export default Form;
