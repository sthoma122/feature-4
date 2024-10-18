import React, { useState, useEffect } from "react";
import { getPeople, createPerson, deletePerson, checkPersonCount } from "../../Services/People/PeopleService";
import MainList from "./MainList";
import "./People.css"; // Import the CSS file for styling

const Main = () => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newNotes, setNewNotes] = useState("");

  useEffect(() => {
    getPeople().then((fetchedNames) => {
      setNames(fetchedNames);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if there are less than 10 entries
    const currentCount = await checkPersonCount();

    if (currentCount < 10) {
      if (newName.trim() && newTitle.trim() && newNotes.trim()) {
        createPerson(newName, newTitle, newNotes).then(() => {
          getPeople().then((updatedPeople) => {
            setNames(updatedPeople); // Update location list after adding a new one
          });
          setNewName("");
          setNewTitle("");
          setNewNotes("");
        });
      } else {
        alert("Please fill out all fields.");
      }
    } else {
      alert("You cannot add more than 10 People.");
    }
  };
  
  const handleDelete = (personId) => {
    deletePerson(personId).then((success) => {
      if (success) {
        getPeople().then((updatedNames) => {
          setNames(updatedNames);
        });
      }
    });
  };

  return (
    <div className="container">
      <div className="left">
        <h3>Submit New Person</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter Name"
          />
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter Title"
          />
          <input
            type="text"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
            placeholder="Enter Notes"
          />
          <button type="submit">Add Person</button>
        </form>
      </div>
      <div className="divider"></div>
      <div className="right">
        <h3>People List</h3>
        <MainList names={names} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Main;
