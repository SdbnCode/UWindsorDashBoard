import React from "react";
import { NavLink } from "react-router-dom";


class Home extends React.Component {
    
    //Filters the data based on the clicked checkboxes
    filterData = () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const datasetItems = document.querySelectorAll('.dataset-item');
    
        datasetItems.forEach(item => {
            const keywords = item.textContent.toLowerCase();
            const shouldDisplay = Array.from(checkboxes).every(checkbox => {
                return keywords.includes(checkbox.nextSibling.textContent.toLowerCase());
            });
    
            if (shouldDisplay) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    };

    
    componentDidMount() {
      // Add event listener to the search button and input field
      document.getElementById("search-button").addEventListener("click", this.performSearch);
      document.getElementById("search-input").addEventListener("keyup", this.handleKeyUp);
  
      // Add event listener to filter button
      document.querySelector('.filter-button').addEventListener('click', this.filterData);
  
      // Add event listeners to checkboxes
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
          checkbox.addEventListener("change", this.filterData);
      });
  }

    componentWillUnmount() {
        // Remove event listeners when component is unmounted to prevent memory leaks
        document.getElementById("search-button").removeEventListener("click", this.performSearch);
        document.getElementById("search-input").removeEventListener("keyup", this.handleKeyUp);
        document.querySelector('.filter-button').removeEventListener('click', this.filterData);

        // Remove event listeners from checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.removeEventListener("change", this.filterData);
    });
}

    performSearch = () => {
        const input = document.getElementById("search-input").value.toUpperCase();
        const datasetItems = document.querySelectorAll('.dataset-item');
    
        datasetItems.forEach(item => {
            const itemContent = item.textContent.toUpperCase();
            const shouldDisplay = itemContent.includes(input);
    
            if (shouldDisplay) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    

    handleKeyUp = (event) => {
        if (event.key === "Enter") {
            this.performSearch();
        }
    }

  render() {
    return (
        <div className="main">
        <div className='title-container'>
            <h1>Welcome to the City of Windsor Open Data Portal</h1>
            <p>Explore our datasets to learn more about the city and its services.</p>
            <div className = "main-search-box">
                <input type="text" id="search-input" placeholder="Search.."/>
                <input type="button" id="search-button" value="Search"/>      
            </div>
            <div class = "main-search"></div>
        </div>

        <div className='home-body'>
        <aside class="sidebar"> 
            <header class = "dataset-filter">
                <h3>Dataset Filters</h3>
                <button class="filter-button">Apply Filter</button>
            </header>    

            <div class ="filters">
            <h4>Topic</h4>
            <ul>
                <li><input type="checkbox" id="filter1"/><label for="population">Population</label></li>
                <li><input type="checkbox" id="filter2"/><label for="Health">Health</label></li>
                <li><input type="checkbox" id="filter3"/><label for="Transportation">Transportation</label></li>
                <li><input type="checkbox" id="filter4"/><label for="Economy">Economy</label></li>
                <li><input type="checkbox" id="filter5"/><label for="Climate">Climate</label></li>
            </ul>
            </div>
        </aside>

        <div class="dataset-section">
            <h2>All Datasets</h2>
        <ul id="dataset-list">
            <NavLink to="/population">
            <li class="dataset-item">
                <h3>Population Statistics</h3>
                <p>Comprehensive dataset containing population statistics for various regions.</p>
                <p>View Details</p>
            </li>
            </NavLink>
            <NavLink to="/climate">
            <li class="dataset-item">
                <h3>Climate Change Data</h3>
                <p>Dataset providing information on climate change indicators and trends.</p>
                <a href="climate.html">View Details</a>
            </li>
            </NavLink>
            <NavLink to="/transportation">
            <li class="dataset-item">
                <h3>Transportation Infrastructure</h3>
                <p>Data on transportation infrastructure including roads, bridges, and public transit systems.</p>
                <a href="transportation.html">View Details</a>
            </li>
            </NavLink>
            <NavLink to="/economy">
            <li class="dataset-item">
                <h3>Economic Indicators</h3>
                <p>Dataset containing economic indicators such as GDP, inflation rate, and unemployment rate.</p>
                <a href="economy.html">View Details</a>
            </li>
            </NavLink>
            <NavLink to="/healthcare">
            <li class="dataset-item">
                <h3>Healthcare Statistics</h3>
                <p>Data on healthcare facilities, diseases, and public health measures.</p>
                <a href="healthcare.html">View Details</a>
            </li>
            </NavLink>
        </ul>
        </div>
        </div>
        </div>
    );
  }
}   

export default Home;