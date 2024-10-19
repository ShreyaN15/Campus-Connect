// src/components/HomePage.js
// src/components/HomePage.jsx
// src/components/HomePage.jsx
import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import cartImage from '../assets/cart.jpeg';
import eventImage from '../assets/event.png';
import hostelImage from '../assets/hostel.png';
import mapImage from '../assets/maps.jpeg';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="background-image"></div>
            <div className="content">
                <h1>CampusConnect</h1>
                <p>"Find, Book, Connect – Your Campus Essentials Made Easy!"</p>
                <nav className="navbar">
                    <a href="/hostel-hub">Hostel Hub</a>
                    <a href="/campus-deals">Campus Deals</a>
                    <a href="/map">Map</a>
                    <a href="/event-chart">Event Chart</a>
                </nav>
            </div>
            <div className="card-section">
                <h2>We Offer Best Services</h2>
                <div className="cards">
                    <div className="card">
                        <img src={hostelImage} alt="Hostel Hub" />
                        <h3>Hostel Hub</h3>
                        <p>Hostel Hub connects college students with hostel accommodations, providing detailed listings, user reviews, and a marketplace for buying and selling essential items.</p>
                        <a href="/hostel-hub" className="view-button">View</a>
                    </div>
                    <div className="card">
                        <img src={cartImage} alt="Campus Deals" />
                        <h3>Campus Deals</h3>
                        <p>Campus Deals is a platform for students to buy and sell hand-me-down items, facilitating the exchange of used textbooks and essentials.</p>
                        <a href="/campus-deals" className="view-button">View</a>
                    </div>
                    <div className="card">
                        <img src={mapImage} alt="Map" />
                        <h3>Map</h3>
                        <p>The campus map displays key locations, helping students easily find essential spots like libraries and dining areas.</p>
                        <a href="/map" className="view-button">View</a>
                    </div>
                    <div className="card">
                        <img src={eventImage} alt="Event Chart" />
                        <h3>Event Chart</h3>
                        <p>The event chart displays upcoming college events, providing students with essential details to foster greater engagement.</p>
                        <a href="/event-chart" className="view-button">View</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;