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
        notes: item.get("Notes"),  // Get the "Notes" field
        rating: item.get("Rating") // sol added
      }));
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};


export const createLocation = (Name, Title, Notes, Rating) => {
  console.log("Creating: ", { Name, Title, Notes, Rating });
  const People = Parse.Object.extend("Location");
  const query = new People();
  // using setters to update the object
  query.set("Name", Name);
  query.set("Title", Title);
  query.set("Notes", Notes);
  query.set("Rating", Rating);
  return query.save().then((result) => {
    // returns new Person object
    return result;
  });
};

export const deleteLocation = (locationId) => {
  const Location = Parse.Object.extend("Location");
  const query = new Parse.Query(Location);

  return query.get(locationId)
    .then((location) => {
      return location.destroy()
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

// updates the location rating based on value
export const updateLocation = (locationId, value) => {
  const Location = Parse.Object.extend("Location");
  const query = new Parse.Query(Location);

  return query.get(locationId)
    .then((location) => {
      location.set("Rating", Number(location.get("Rating"))+value);
      location.save();
    })
    .catch((error) => {
      console.log("Error updating:", error);
      return false; // Return a failure indicator
    });
};

export const checkLocationCount = async () => {
  const query = new Parse.Query("Location"); // Ensure class name is correct
  try {
    const count = await query.count(); // Get current count of Location objects
    console.log(`Total Locations: ${count}`);
    return count;
  } catch (error) {
    console.log("Error counting locations (Delete one to continue):", error);
    return 0; // Return a default count if an error occurs
  }
};

// want to update the charts on create, update, and delete
// this is set here so that it is avaiable everywhere
Parse.liveQueryServerURL = "ws://reactexample.b4a.io/";