import React from "react";

class Search extends React.Component {
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
                    <a>Testing</a>
                    <p>Description of Dataset 1</p>
                    <a href="dataset1.html">View Details</a>
                </li>
                <li class="dataset-item">
                    <a>Example 2</a>
                    <p>Description of Dataset 2</p>
                    <a href="dataset2.html">View Details</a>
                </li>
                <li class="dataset-item">
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

export default Search;