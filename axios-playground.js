const axios = require("axios")

const url = "https://projects.propublica.org/nonprofits/api/v2/search.json?q=voter";
axios
  .get(url)
  .then(response => {
    for(var i= 0; i<20; i++) {
    console.log(
        response.data.organizations[i].name,
        response.data.organizations[i].city,
        response.data.organizations[i].state,
      );
    }
   }).catch(error => {
      console.log(error);
    });
