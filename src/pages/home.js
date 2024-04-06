import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";


class Home extends React.Component {
  render() {
    return (
        <div>
        <div className='main'>
            <h1>Welcome to the City of Windsor Open Data Portal</h1>
            <div className = "main-search-box">
                <input type="text" id="search-input" placeholder="Search.."/>
                <input type="button" id="search-button" value="Search"/>      
            </div>
    
            <h3>All Datasets</h3>
            <ul id="dataset-list">
                <li className="dataset-item">
                    <a>Testing</a>
                    <p>Description of Dataset 1</p>
                    <a href="dataset1.html">View Details</a>
                </li>
                <li className="dataset-item">
                    <a>Example 2</a>
                    <p>Description of Dataset 2</p>
                    <a href="dataset2.html">View Details</a>
                </li>
                <li className="dataset-item">
                    <a>Example 3</a>
                    <p>Description of Dataset 3</p>
                    <a href="dataset2.html">View Details</a>
                </li>
            </ul>
            </div>
        </div>
    );
  }
}   

export default Home;