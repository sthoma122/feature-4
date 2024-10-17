import { useEffect, useState } from "react";
import { getLocations, getPeople } from "../../Services/Data.js";
import MainList from "./People.js";
import LocationList from "./Location.js";

// import Components from "../Components.js";

// Stateful parent component
const Main = () => {
  const [users, setUsers] = useState([]);
  const [Twos, setTwos] = useState([]);
  const [nameInput, setNameInput] = useState(""); // State for name input
  const [titleInput, setTitleInput] = useState(""); // State for title/rating input
  const [notesInput, setNotesInput] = useState(""); // State for notes input

  // Fetching people data from services
  useEffect(() => {
    getPeople().then((users) => {
      setUsers(users);
    });
  }, []);

  // Fetching location data from services
  useEffect(() => {
    getLocations().then((Twos) => {
      setTwos(Twos);
    });
  }, []);

  // Handle text box input changes
  const handleNameChange = (e) => {
    setNameInput(e.target.value); // Update state with new name input value
  };

  const handleTitleChange = (e) => {
    setTitleInput(e.target.value); // Update state with new title input value
  };

  const handleNotesChange = (e) => {
    setNotesInput(e.target.value); // Update state with new notes input value
  };

  return (
    <div class="center">
      <h1>Feature 3</h1>
      <div class="buttons">
        <input type="radio" id="person" name="fav_language" value="Person" />
        <label for="person">Person</label>
        <input
          type="radio"
          id="location"
          name="fav_language"
          value="Location"
        />
        <label for="location">Location</label><br />
      </div>

      <br />

      {/* <!-- Name input --> */}
      <div>
        <label for="name-input">Enter a Name: </label>
        <input
          type="text"
          id="name-input"
          value={nameInput}
          onInput={handleNameChange}
          placeholder="Name"
        />
      </div>

      {/* <!-- Title/Rating input --> */}
      <div>
        <label for="title-input">Enter a Title/Rating: </label>
        <input
          type="text"
          id="title-input"
          value={titleInput}
          onInput={handleTitleChange}
          placeholder="Title/Rating"
        />
      </div>

      {/* <!-- Notes input --> */}
      <div>
        <label for="notes-input">Enter Notes: </label>
        <input
          type="text"
          id="notes-input"
          value={notesInput}
          onInput={handleNotesChange}
          placeholder="Notes"
        />
      </div>

      {/* <!-- Display the entered data as the user types --> */}
      <div>
        <h3>Entered Data:</h3>
        <p class="edit_data"><strong>Name:</strong> {nameInput}</p>
        <p class="edit_data"><strong>Title/Rating:</strong> {titleInput}</p>
        <p class="edit_data"><strong>Notes:</strong> {notesInput}</p>
      </div>


      {/* TODO: need to implement these correctly, consider feature 4 kickoff,
      I think that would include the student A parse things*/}

      {/* <!-- People list --> */}
      {/* <div>
        <MainList users={users} />
      </div> */}

      {/* <!-- Locations list --> */}
      {/* <div>
        <LocationList users={Twos} />
      </div> */}

      <hr />
      <div class="users">
        <h2>User</h2>
        {/* <!-- Hardcoded checkboxes for Solomon, Jonathan, Guest --> */}
        <input type="checkbox" id="name1" name="name1" value="Solomon" />
        <label for="name1">Solomon</label>
        <input type="checkbox" id="name2" name="name2" value="Jonathan" />
        <label for="name2">Jonathan</label>
        <input type="checkbox" id="name3" name="name3" value="Guest" />
        <label for="name3">Guest</label>
      </div>

      {/* <!-- Add checkboxes here --> */}
      {/* <!-- Also display the info from name, rating, notes as a temp --> */}

      {/* this is the routing navigation */}
      {/* <Components /> */}

    </div>
  );
};

export default Main;
