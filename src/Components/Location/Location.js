import React, { useState, useEffect } from "react";
import { getLocation, createLocation } from "../../Services/Location/LocationService";
import MainList from "./MainList";
import "./Location.css"; // Import the CSS file for styling

const Main = () => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newNotes, setNewNotes] = useState("");

  useEffect(() => {
    getLocation().then((fetchedNames) => {
      setNames(fetchedNames);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() && newTitle.trim() && newNotes.trim()) {
      createLocation(newName, newTitle, newNotes).then((result) => {
        getLocation().then((updatedNames) => {
          setNames(updatedNames);
        });
        setNewName("");
        setNewTitle("");
        setNewNotes("");
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <h3>Submit New Location</h3>
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
          <button type="submit">Add Location</button>
        </form>
      </div>
      <div className="divider"></div>
      <div className="right">
        <h3>Location List</h3>
        <MainList names={names} />
      </div>
    </div>
  );
};

export default Main;