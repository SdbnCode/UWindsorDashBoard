import React from "react";

// Contact component
class Contact extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>Contact Us</h1>
                <p>Have questions or concerns? Get in touch with us!</p>
                <div className="contact-details">
                    <div className="contact-info">
                        <h2>City Hall</h2>
                        <p>Address: 350 City Hall Square W, Windsor, ON N9A 6S1, Canada</p>
                        <p>Phone: +1 519-255-6100</p>
                        <p>Email: info@cityofwindsor.ca</p>
                    </div>
                    <div className="contact-form">
                        <h2>Send us a Message</h2>
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
