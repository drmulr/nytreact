import React from 'react';


const Results = props => (

  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-table" />   Top Articles</strong></h3>
          </div>
          <div className="panel-body" id="well-section">

            {props.articleFeed.length ? (
              <ul className="list-group">
                  {props.articleFeed.map(article => (

                <li className="list-group-item">
                    <h3>{article.headline.main}</h3>
                    <p>{article.snippet}</p>
                    <a rel="noreferrer noopener" target="_blank" href={article.web_url}>Go to article!</a>
                </li>
                ))}
              </ul>
            ) : (<h3>No Results to Display</h3>)}
          </div>
        </div>
      </div>
    </div>
  </div>

);


export default Results; 