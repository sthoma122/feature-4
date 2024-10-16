const axios = window.axios;

// this has two methods for getting different types of data in the json
// using .people or .locations in the return allows for choice

export const getPeople = () => {
  return axios
    .get("./Services/data.json")
    .then((response) => {
      return response.data.people;
    })
    .catch((err) => {
      console.log("GET Error: ", err);
    });
};

export const getLocations = () => {
  return axios
    .get("./Services/data.json")
    .then((response) => {
      return response.data.locations;
    })
    .catch((err) => {
      console.log("GET Error: ", err);
    });
};
