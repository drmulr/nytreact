import React from "react";



const Search = props => (
  



<div className="container">
<div className="row">
  <div className="col-sm-12">
    <br />

    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title"><strong><i className="fa  fa-list-alt" />   Search Parameters</strong></h3>
      </div>
      <div className="panel-body">
        <form role="form">
          <div className="form-group">
            <label htmlFor="search">Search Term:</label>
            <input type="text" 
            name="search"
            className="form-control" 
            id="search"         
            onChange={props.handleInputChange}
            value={props.search}/>
          </div>
          
          <div className="form-group">
            <label htmlFor="pwd">Number of Records to Retrieve:</label>
            <select 
            className="form-control" 
            id="num-records-select"
            onChange={props.handleInputChange}
            value={props.numDesired}
            name="numDesired">
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="start-year">Start Year (Optional):</label>
            <input 
            type="text" 
            className="form-control" 
            id="start-year"
            name="startYear"
            onChange={props.handleInputChange}
            value={props.startYear} />
          </div>

          <div className="form-group">
            <label htmlFor="end-year">End Year (Optional):</label>
            <input 
            type="text" 
            className="form-control" 
            id="end-year" 
            name="endYear"
            onChange={props.handleInputChange}
            value={props.endYear} />
          </div>


          <button type="submit" onClick={props.handleFormSubmit}
          className="btn btn-default" 
          id="run-search"><i className="fa fa-search" /> Search</button>
          <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash" /> Clear Results</button>

        </form>
      </div>
    </div>
  </div>
</div>
</div>
  
  );


export default Search;
