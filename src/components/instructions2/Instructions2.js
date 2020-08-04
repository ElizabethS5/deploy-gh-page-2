import React from "react";

function Instructions2(props) {
  let openingTag = '<BrowserRouter basename="/' + props.repo + '" >';
  let app = "<App />";
  let closingTag = "</BrowserRouter>";
  return (
    <React.Fragment>
      <h2>For apps that use BrowserRouter</h2>
      <p>In the index.js file, add basename property to BrowserRouter</p>
      <pre>
        {openingTag} <br /> {app} <br />
        {closingTag}
      </pre>
    </React.Fragment>
  );
}

export default Instructions2;
