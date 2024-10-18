import Parse from "parse";

export const getLocation = () => {
  const Place = Parse.Object.extend("Location");
  const query = new Parse.Query(Place);
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


export const createLocation = (Name, Title, Notes) => {
  console.log("Creating: ", { Name, Title, Notes });
  const People = Parse.Object.extend("Location");
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
