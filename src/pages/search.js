import React from "react";

class Search extends React.Component {

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
        });
    }

    
    componentDidMount() {
        // Add event listeners to the search button and input field
        document.getElementById("search-button").addEventListener("click", this.performSearch);
        document.getElementById("search-input").addEventListener("keyup", this.handleKeyUp);
    }

    componentWillUnmount() {
        // Remove event listeners when component is unmounted to prevent memory leaks
        document.getElementById("search-button").removeEventListener("click", this.performSearch);
        document.getElementById("search-input").removeEventListener("keyup", this.handleKeyUp);
    }

    performSearch = () => {
        let input, search, ul, li, a, i;
        input = document.getElementById("search-input");
        search = input.value.toUpperCase();
        ul = document.getElementById("dataset-list");
        li = ul.getElementsByTagName("li");

        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(search) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    handleKeyUp = (event) => {
        if (event.key === "Enter") {
            this.performSearch();
        }
    }

    render() {
        return (
    <div class = "main-search">
        <aside class="sidebar">
            
        <header class = "dataset-filter">
            <h3>Dataset Filters</h3>
            <button class="filter-button">Apply Filter</button>
        </header>    

            <div class ="filters">
            <h4>Topic</h4>
            <ul>
                <li><input type="checkbox" id="filter1"/><label for="filter1">Filter 1</label></li>
                <li><input type="checkbox" id="filter2"/><label for="filter2">Filter 2</label></li>
                <li><input type="checkbox" id="filter3"/><label for="filter3">Filter 3</label></li>
            </ul>
            <h4>Civic Issues</h4>
            <ul>
                <li><input type="checkbox" id="filter1"/><label for="filter1">Filter 1</label></li>
                <li><input type="checkbox" id="filter2"/><label for="filter2">Filter 2</label></li>
                <li><input type="checkbox" id="filter3"/><label for="filter3">Filter 3</label></li>
            </ul>
            <h4>Publisher</h4>
            <ul>
                <li><input type="checkbox" id="filter1"/><label for="filter1">Filter 1</label></li>
                <li><input type="checkbox" id="filter2"/><label for="filter2">Filter 2</label></li>
                <li><input type="checkbox" id="filter3"/><label for="filter3">Filter 3</label></li>
            </ul>
            </div>
        </aside>

        <div class="dataset-section">
            <h1>Dataset Catalogue</h1>
            <div class = "main-search-box">
                <input type="text" id="search-input" placeholder="Search.."/>
                <input type="button" id="search-button" value="Search"/>      
            </div>
    
            <h3>All Datasets</h3>
            <ul id="dataset-list">
    <li class="dataset-item">
        <a>Population Statistics</a>
        <p>Comprehensive dataset containing population statistics for various regions.</p>
        <a href="population.html">View Details</a>
    </li>
    <li class="dataset-item">
        <a>Climate Change Data</a>
        <p>Dataset providing information on climate change indicators and trends.</p>
        <a href="climate.html">View Details</a>
    </li>
    <li class="dataset-item">
        <a>Transportation Infrastructure</a>
        <p>Data on transportation infrastructure including roads, bridges, and public transit systems.</p>
        <a href="transportation.html">View Details</a>
    </li>
    <li class="dataset-item">
        <a>Economic Indicators</a>
        <p>Dataset containing economic indicators such as GDP, inflation rate, and unemployment rate.</p>
        <a href="economy.html">View Details</a>
    </li>
    <li class="dataset-item">
        <a>Healthcare Statistics</a>
        <p>Data on healthcare facilities, diseases, and public health measures.</p>
        <a href="healthcare.html">View Details</a>
    </li>
</ul>

        </div>
    </div>
        );
    }
}

export default Search;