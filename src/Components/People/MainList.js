import React from "react";

const MainList = ({ names }) => {
  return (
    <ul>
      {names.map((person) => (
        <li key={person.id}>
          <strong>Name:</strong> {person.name} <br />
          <strong>Title:</strong> {person.title} <br />
          <strong>Notes:</strong> {person.notes}
        </li>
      ))}
    </ul>
  );
};

export default MainList;
