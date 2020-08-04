import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Make a GitHub Page for Create-React-App</h1>
      <main>
        <h2>Setup</h2>
        <p>In the terminal:</p>
        <pre>npm install gh-pages --save-dev</pre>

        <p>In package.json JSON object, add:</p>
        <pre>"homepage": "http://ElizabethS5.github.io/deploy-gh-page"</pre>

        <p>In package.json "scripts", add:</p>
        <pre>
          "predeploy": "npm run build",
          <br />
          "deploy": "gh-pages -d build"
        </pre>

        <h2>Deployment</h2>
        <p>Add, commit, and push changes to your GitHub repository</p>
        <p>In the terminal:</p>
        <pre>npm run deploy</pre>
      </main>
    </div>
  );
}

export default App;
