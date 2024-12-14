import React, { useState, useRef } from "react";
import { getLocation, createLocation, deleteLocation, checkLocationCount, updateLocation } from "../../Services/Location/LocationService";
import MainList from "./MainList";
import "./Location.css"; // Import the CSS file for styling

import Parse from 'parse';
import Rating from '@mui/material/Rating';
import { useParseQuery } from '@parse/react';

const Main = () => {
  const [newName, setNewName] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newNotes, setNewNotes] = useState("");
  const [newRating, setNewRating] = useState("");

  // update the stars
  const [value, setValue] = useState(5);
  const valueRef = useRef();
  valueRef.current = value;

  // this is kept for reference later as what we used to do:
  // Fetch locations when the component mounts
  // useEffect(() => {
  //   getLocation()
  //   .then((fetchedLocations) => {
  //     setLocations(fetchedLocations); // Set fetched data as 'locations'
  //   });
  // }, []);


  Parse.enableLocalDatastore();
  const parseQuery = new Parse.Query('Location');
  const {
    results, // Stores the current results in an array of Parse Objects
  } = useParseQuery(
    parseQuery, // The Parse Query to be used
    {
      enabled: true, // Enables the parse query (default: true)
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true // Enables live query for real-time update (default: true)
    }
  );

  // useParseQuery can have lots of things returned, but results is all we need right now
  // mapping the location data for the list item
  const locations = results ? results.map(item => ({
    id: item.id,
    name: item.get("Name"),
    title: item.get("Title"),
    notes: item.get("Notes"),
    value: item.get("Rating")
  })) : [];


  // Handle form submission to create a new location
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if there are less than 10 entries
    const currentCount = await checkLocationCount();
  
    // updated to include ratings
    if (currentCount < 10) {
      if (newName.trim() && newTitle.trim() && newNotes.trim()) {
        createLocation(newName, newTitle, newNotes, newRating).then(() => {
          getLocation().then((updatedLocations) => {
            console.log(updatedLocations);
          // we no longer need this because updating the locations is handled by the live query/useParseQuery
          //   setLocations(updatedLocations); // Update location list after adding a new one
          });
          setNewName("");
          setNewTitle("");
          setNewNotes("");
          setNewRating("");
        });
      } else {
        alert("Please fill out all fields.");
      }
    } else {
      alert("You cannot add more than 10 locations.");
    }
  };

  // Handle deleting a location by its ID
  const handleDelete = (locationId) => {
    deleteLocation(locationId).then((success) => {
      if (success) {
        getLocation().then((updatedLocations) => {
          console.log(updatedLocations);
        });
      }
    });
  };

  return (
    <div>
    <div className="container">
      <div className="left">
        <h3>Submit New Location</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter Location Name"
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
          {/* the star rating component */}
          <Rating
                name="simple-controlled"
                value={value}
                onChange={(e, newValue) => {
                  setValue(newValue);
                  setNewRating(Number(e.target.value))
                }}
            />
          <button type="submit">Add Location</button>
        </form>
      </div>
      <div className="divider"></div>
      <div className="right">
        <h3>Location List</h3>
        <MainList locations={locations} onDelete={handleDelete} onRatingUpdate={updateLocation} />
      </div>
    </div>
    < br />
    </div>
  );
};

export default Main;
