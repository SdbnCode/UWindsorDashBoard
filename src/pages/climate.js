import React from "react";

// Climate component
class Climate extends React.Component {

    render() {
        return (
            <div className="main">
                <h1>Climate</h1>
                <p>Windsor has a humid continental climate with four distinct seasons.</p>
                <h2>Summer</h2>
                <p>Summers in Windsor are warm and humid, with average temperatures ranging from 20°C to 30°C.</p>
                <h2>Fall</h2>
                <p>Fall in Windsor is mild and pleasant, with cool temperatures and colorful foliage.</p>
                <h2>Winter</h2>
                <p>Winters in Windsor are cold and snowy, with average temperatures ranging from -5°C to 5°C.</p>
                <h2>Spring</h2>
                <p>Spring in Windsor is cool and wet, with temperatures gradually warming up and flowers blooming.</p>
            </div>
        );
    }
}

export default Climate;