import React from "react";
import { Helmet } from "react-helmet";
import Config from "../Config.json";


class Home extends React.Component {
  render() {
    return (
        <div>
        <div className='main'>
            <h1>Welcome to the City of Windsor Open Data Portal</h1>
            <p>Explore our datasets to learn more about the city and its services.</p>
            <div className = "main-search-box">
                <input type="text" id="search-input" placeholder="Search.."/>
                <input type="button" id="search-button" value="Search"/>      
            </div>
        
            </div>
        </div>
    );
  }
}   

export default Home;