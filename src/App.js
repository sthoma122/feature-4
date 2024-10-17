// import logo from './logo.svg';
// import './App.css';

import './styles.css';

import Parse from "parse";
import * as ENV from "./environments.js"


// change this so that it is inside components
// set up feature 3
import Main from "./Main/Main.js"

// initializing 
Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;


// replace main with components
// dont route in app.js
function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
