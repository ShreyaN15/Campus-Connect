// src/components/HomePage.js
// src/components/HomePage.jsx
// src/components/HomePage.jsx
// import React from 'react';
// import './HomePage.css'; // Import the CSS file for styling
// import cartImage from '../assets/cart.jpeg';
// import eventImage from '../assets/event.png';
// import hostelImage from '../assets/hostel.png';
// import mapImage from '../assets/maps.jpeg';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//     return (
//         <div className="homepage" id="home">
//             <div className="background-image"></div>
//             <div className="content">
//                 <h1>CampusConnect</h1>
//                 <p>"Find, Book, Connect – Your Campus Essentials Made Easy!"</p>
//                 <nav className="navbar">
//                     <a href="#home">Home</a>
//                     <a href="#about">About</a>
//                     <a href="#services">Services</a>
//                     <a href="#contact">Contact Us</a>
//                 </nav>
//             </div>
//             <div className="card-section">
//                 <h2>We Offer Best Services</h2>
//                 <div className="cards" id="services">
//                     <div className="card" >
//                         <img src={hostelImage} alt="Hostel Hub" />
//                         <h3>Hostel Hub</h3>
//                         <p>Hostel Hub connects college students with hostel accommodations, providing detailed listings, user reviews, and a marketplace for buying and selling essential items.</p>
//                         <Link to="/hostel-hub" className="view-button">View</Link> {/* Link to Hostel Hub page */}
//                     </div>
//                     <div className="card">
//                         <img src={cartImage} alt="Campus Deals" />
//                         <h3>Campus Deals</h3>
//                         <p>Campus Deals is a platform for students to buy and sell hand-me-down items, facilitating the exchange of used textbooks and essentials.</p>
//                         <Link to="/campus-deals" className="view-button">View</Link> 
//                     </div>
//                     <div className="card">
//                         <img src={mapImage} alt="Map" />
//                         <h3>Map</h3>
//                         <p>The campus map displays key locations, helping students easily find essential spots like libraries and dining areas.</p>
//                         <Link to="/map" className="view-button">View</Link>
//                     </div>
//                     <div className="card">
//                         <img src={eventImage} alt="Event Chart" />
//                         <h3>Event Chart</h3>
//                         <p>The event chart displays upcoming college events, providing students with essential details to foster greater engagement.</p>
//                         <Link to="/event-chart" className="view-button">View</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePage;
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
        <div className="homepage" id="home">
            <div className="background-image"></div>
            <div className="content">
                <h1>CampusConnect</h1>
                <p>"Find, Book, Connect – Your Campus Essentials Made Easy!"</p>
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact Us</a>
                </nav>
            </div>
            <div className="card-section">
                <h2>We Offer Best Services</h2>
                <div className="cards" id="services">
                    <div className="card">
                        <img src={hostelImage} alt="Hostel Hub" />
                        <h3>Hostel Hub</h3>
                        <p>Hostel Hub connects college students with hostel accommodations, providing detailed listings, user reviews, and a marketplace for buying and selling essential items.</p>
                        <a href="#hostel-hub" className="view-button">View</a> {/* Link to Hostel Hub section */}
                    </div>
                    <div className="card">
                        <img src={cartImage} alt="Campus Deals" />
                        <h3>Campus Deals</h3>
                        <p>Campus Deals is a platform for students to buy and sell hand-me-down items, facilitating the exchange of used textbooks and essentials.</p>
                        <a href="#campus-deals" className="view-button">View</a> {/* Link to Campus Deals section */}
                    </div>
                    <div className="card">
                        <img src={mapImage} alt="Map" />
                        <h3>Map</h3>
                        <p>The campus map displays key locations, helping students easily find essential spots like libraries and dining areas.</p>
                        <a href="#map" className="view-button">View</a> {/* Link to Map section */}
                    </div>
                    <div className="card">
                        <img src={eventImage} alt="Event Chart" />
                        <h3>Event Chart</h3>
                        <p>The event chart displays upcoming college events, providing students with essential details to foster greater engagement.</p>
                        <a href="#event-chart" className="view-button">View</a> {/* Link to Event Chart section */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;