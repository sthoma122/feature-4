import React from "react";

const MainList = ({ locations, onDelete }) => {
  return (
    <ul>
      {locations.map((location) => (
        <li key={location.id}>
          <strong>Location Name:</strong> {location.name} <br />
          <strong>Address:</strong> {location.title} <br />
          <strong>Description:</strong> {location.notes} <br />
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