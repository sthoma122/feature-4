import React from "react";

const MainList = ({ names }) => {
  return (
    <ul>
      {names.map((location) => (
        <li key={location.id}>
          <strong>Name:</strong> {location.name} <br />
          <strong>Title:</strong> {location.title} <br />
          <strong>Notes:</strong> {location.notes}
        </li>
      ))}
    </ul>
  );
};

export default MainList;
