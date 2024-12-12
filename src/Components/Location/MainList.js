import React, { useState, useRef } from "react";
import Rating from '@mui/material/Rating';

const MainList = ({ locations, onDelete, onRatingUpdate }) => {

  const [value, setValue] = useState(5);
  // Create ref 
  const valueRef = useRef();
  // Initialize ref
  valueRef.current = value;

  return (
    <ul>
      {locations.map((location) => (
        <li key={location.id}>
          <strong>Location Name:</strong> {location.name} <br />
          <strong>Address:</strong> {location.title} <br />
          <strong>Description:</strong> {location.notes} <br />
          <Rating
                name="simple-controlled"
                value={value}
                onChange={(e, newValue) => {
                  setValue(newValue);
                  console.log(valueRef.current);
                  onRatingUpdate(location.id, Number(e.target.value));
                }}
            /> <br />
          <input
            type="radio"
            name="deleteLocation"
            onClick={() => onDelete(location.id)} // Calls the delete function with location id
          /> Delete
        </li>
      ))}
    </ul>
  );
};

export default MainList;