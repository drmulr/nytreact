import React, { Component } from 'react';
import Header from '../../components/Header';
import Search from '../../components/Search';
import Results from '../../components/Results';
import Saved from '../../components/Saved';
import Footer from '../../components/Footer';
import API from "../../utils/API";



class Articles extends Component {
  state = {
      search: "",
      startYear: "",
      endYear: "",
      numDesired: "",
      results: [],
      combinedSearch: ""
    };

  // =========================================================
  //   CAPTURING DATA FROM SEARCH FIELDS
  // =========================================================

  searchNYT = query => {
      API.search(query)
      .then(res => this.setState({ results: res }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the NYT API for `this.state.combinedSearch`
  //mutating state directly...need not do that...change.
  handleFormSubmit = event => {
    event.preventDefault();
    this.state.combinedSearch = this.state.search;

    if (this.state.startYear) {
      this.state.startYear += "0101";
      this.state.combinedSearch = this.state.combinedSearch + "&begin_date=" + this.state.startYear;
    }
    if (this.state.endYear) {
      this.state.endYear += "1231";
      this.state.combinedSearch = this.state.combinedSearch + "&end_date=" + this.state.endYear;
    }

    this.searchNYT(this.state.combinedSearch);
    console.log(this.state.results);
  
  };

  // =========================================================
  // END SEARCH CAPTURE
  // =========================================================


  render() {
    return (
        <div>
          <Header />
          <Search
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <Results 
            articleFeed={this.state.results}/>
          <Saved />
          <Footer />
        </div>
    );
  }
}

export default Articles;
