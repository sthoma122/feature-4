import logo from './logo.svg';
import './App.css';

import Parse from "parse";
import * as ENV from "./environments.js"

// initializing 
Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
// Parse.serverURL(ENV.SERVER_URL);
Parse.serverURL = ENV.SERVER_URL;

// this is my try for the feature 4 kickoff
const Kickoff = Parse.Object.extend("Kickoff");
const kickoff = new Kickoff();

kickoff.set("attempt", 4444);

kickoff.save()
.then((kickoff) => {
  // Execute any logic that should take place after the object is saved.
  alert('New object created with objectId: ' + kickoff.id);
}, (error) => {
  // Execute any logic that should take place if the save fails.
  // error is a Parse.Error with an error code and message.
  alert('Failed to create new object, with error code: ' + error.message);
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
