// src/components/CampusDeals.jsx
// src/components/CampusDeals.jsx
// src/components/CampusDeals.jsx
import React, { useState } from 'react';
import './CampusDeals.css'; // Import the CSS file for styling
import booksImage from '../assets/books.jpeg'; // Path to books image
import stationaryImage from '../assets/stationary.jpeg'; // Path to stationery image
import electronicsImage from '../assets/electronics.jpeg'; // Path to electronics image

const CampusDeals = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="campus-deals">
            <h2>CampusDeals</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for Items..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button>Search</button>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={booksImage} alt="Books" />
                    <h3>Books</h3>
                    <p>Discover collections of academic books.</p>
                    
                    <a href="/books" className="view-button">View</a> {/* Link to Books page */}
                </div>
                <div className="card">
                    <img src={stationaryImage} alt="Stationary" />
                    <h3>Stationery</h3>
                    <p>Get your hands on essential stationery for your studies.</p>
                    <a href="/stationary" className="view-button">View</a>
                </div>
                <div className="card">
                    <img src={electronicsImage} alt="Electronics" />
                    <h3>Electronics</h3>
                    <p>Find electronic gadgets and devices.</p>
                    <a href="/electronics" className="view-button">View</a>
                </div>
            </div>
            <footer>
                <h4>Contact Us</h4>
                <p>Email: support@campusdeals.com</p>
                <p>Phone: +123 456 7890</p>
            </footer>
            <div className="follow-us">
                <h4>Follow Us</h4>
                <p>Facebook | Twitter | Instagram</p>
            </div>
            <div className="more-links">
                <h4>More Links</h4>
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </div>
    );
};

export default CampusDeals;