import React from "react";

// LearnMore component
class LearnMore extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>About Windsor</h1>
                <p>Welcome to the Learn More page about the city of Windsor!</p>
                <h2>Location</h2>
                <p>Windsor is a city in southwestern Ontario, Canada, situated on the south bank of the Detroit River directly across from Detroit, Michigan, United States.</p>
                <h2>History</h2>
                <p>Windsor was founded in 1749 and was named after the town of Windsor in Berkshire, England.</p>
                <h2>Economy</h2>
                <p>Windsor's economy is primarily based on manufacturing, automotive industry, and tourism.</p>
                <h2>Attractions</h2>
                <ul>
                    <li>Point Pelee National Park</li>
                    <li>Windsor Riverfront</li>
                    <li>Windsor International Airport</li>
                    <li>University of Windsor</li>
                    <li>Art Gallery of Windsor</li>
                </ul>
            </div>
        );
    }
}

export default LearnMore;