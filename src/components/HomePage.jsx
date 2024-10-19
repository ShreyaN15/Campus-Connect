// src/components/HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="background-image"></div>
            <div className="content">
                <h1>Campus Connect</h1>
                <p>"Find, Book, Connect – Your Campus Essentials Made Easy!"</p>
                <nav className="navbar">
                    <a href="/hostel-hub">Hostel Hub</a>
                    <a href="/campus-deals">Campus Deals</a>
                    <a href="/map">Map</a>
                    <a href="/event-chart">Event Chart</a>
                </nav>
            </div>
        </div>
    );
};

export default HomePage;