import React from "react";

const MainList = ({ names, onDelete }) => {
  return (
    <ul>
      {names.map((person) => (
        <li key={person.id}>
          <strong>Name:</strong> {person.name} <br />
          <strong>Title:</strong> {person.title} <br />
          <strong>Notes:</strong> {person.notes} <br />
          <input
            type="radio"
            name="deletePerson"
            onClick={() => onDelete(person.id)} // Call the delete function when the radio button is clicked
          /> Delete
        </li>
      ))}
    </ul>
  );
};

export default MainList;