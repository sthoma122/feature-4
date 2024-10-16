// import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// the place to format the locations from json

// stateless child

const LocationList = ({ users }) => {
  return (
    <div>
      <hr />
      <h2>Locations</h2>
      <ul>
        {users.map(
          (user) => <li key="{user}">${user.name} : ${user.rating}</li>
        )}
      </ul>
    </div>
  );
};

export default LocationList;
