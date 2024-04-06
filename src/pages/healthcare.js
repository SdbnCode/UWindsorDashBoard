import React from "react";

class Healthcare extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>Healthcare</h1>
                <p>Windsor has a strong healthcare system that serves the residents of the city and surrounding areas.</p>
                <h2>Hospitals</h2>
                <p>Windsor has several hospitals that provide a range of healthcare services:</p>
                <ul>
                    <li>Windsor Regional Hospital</li>
                    <li>Hotel-Dieu Grace Healthcare</li>
                    <li>HDGH Ouellette Campus</li>
                    <li>HDGH Tayfour Campus</li>
                </ul>
                <h2>Health Services</h2>
                <p>Windsor offers a variety of health services to meet the needs of its residents:</p>
                <ul>
                    <li>Family doctors and clinics</li>
                    <li>Specialist doctors and clinics</li>
                    <li>Urgent care centers</li>
                    <li>Pharmacies</li>
                    <li>Home care services</li>
                </ul>
            </div>
        );
    }
}

export default Healthcare;