import React from "react";
import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const SUFFIX = "&q="

// Export an object with a "search" method that searches the NYT API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + SUFFIX + query)
    .then(function (response) {
      console.log(response.data.response.docs);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};


  //works!!!



// return axios.get(BASEURL + APIKEY + SUFFIX + query)
// .then(res => {
//   const results = res;
//   this.setState({ results });
// })
// .catch(function (error) {
//   console.log(error);
// });