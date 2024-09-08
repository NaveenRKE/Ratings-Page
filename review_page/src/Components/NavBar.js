import React, { useState, useEffect } from 'react';
import '../NavBar.css';

function Navbar() {
    const [points, setPoints] = useState(0);

    // Generate random points between 10 and 100 when the component loads
    useEffect(() => {
        const randomPoints = Math.floor(Math.random() * 11) * 10; // Generates random multiple of 10 between 0 and 100
        setPoints(randomPoints);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={`./download.png`} alt="logo" className="logo-img" />
                <span className="logo-name">DOMINO'S</span>
            </div>
            
            {/* Points displayed on the right */}
            <div className="navbar-points">
                Points: {points}
            </div>
        </nav>
    );
}

export default Navbar;
