import Parse, { serverURL } from "parse";
import * as ENV from "./environments.js"


import Components from './Components/Components.js';

// initializing 
Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;
Parse.liveQueryServerURL = "ws://reactexample.b4a.io/";


// connect to components
// dont route in app.js
function App() {
  return (
    <div className="App">
      <Components />
    </div>
  );
}

export default App;
