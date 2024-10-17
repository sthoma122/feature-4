// import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// the place to format the people from json

// stateless child

const MainList = ({ users }) => {
  return (
    <div>
      <hr />
      <h2>People</h2>
      <ul>
        {users.map(
          (user) => <li key="{user}">${user.name} | ${user.title}</li>
        )}
      </ul>
    </div>
  );
};

export default MainList;
