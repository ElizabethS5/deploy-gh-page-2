import React from "react";
import "./App.css";
import Form from "./components/form/Form";
import Instructions from "./components/instructions/Instructions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        ghname: "<github username>",
        repo: "<github repo name>",
      },
    };
  }

  update = (event) => {
    let formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  render() {
    return (
      <div className="App">
        <h1>Make a GitHub Page for Create-React-App</h1>
        <Form update={this.update} />
        <Instructions
          name={this.state.formData.ghname}
          repo={this.state.formData.repo}
        />
      </div>
    );
  }
}

export default App;
