import Parse from "parse";

export const getPeople = () => {
  const Person = Parse.Object.extend("People");
  const query = new Parse.Query(Person);
  return query
    .find()
    .then((results) => {
      return results.map((item) => ({
        id: item.id,
        name: item.get("Name"),   // Get the "Name" field
        title: item.get("Title"), // Get the "Title" field
        notes: item.get("Notes")  // Get the "Notes" field
      }));
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};


export const createPerson = (Name, Title, Notes) => {
  console.log("Creating: ", { Name, Title, Notes });
  const People = Parse.Object.extend("People");
  const query = new People();
  // using setters to update the object
  query.set("Name", Name);
  query.set("Title", Title);
  query.set("Notes", Notes);
  return query.save().then((result) => {
    // returns new Person object
    return result;
  });
};

export const deletePerson = (personId) => {
  const Person = Parse.Object.extend("People");
  const query = new Parse.Query(Person);

  return query.get(personId)
    .then((person) => {
      return person.destroy()
        .then(() => {
          console.log("Person deleted successfully");
          return true; // Return a success indicator
        })
        .catch((error) => {
          console.log("Error while deleting person:", error);
          return false; // Return a failure indicator
        });
    })
    .catch((error) => {
      console.log("Error finding person:", error);
      return false; // Return a failure indicator
    });
};

export const checkPersonCount = async () => {
  const query = new Parse.Query("People"); // Ensure class name is correct
  try {
    const count = await query.count(); // Get current count of Location objects
    console.log(`Total People: ${count}`);
    return count;
  } catch (error) {
    console.log("Error counting People (Delete one to continue):", error);
    return 0; // Return a default count if an error occurs
  }
};