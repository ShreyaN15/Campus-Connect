


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import ReviewsAndConnect from './components/ReviewsAndConnect';
import CampusDeals from './components/CampusDeals';  // Import your other components
import EventChart from './components/EventChart';
import HostelHub from './components/HostelHub';
import Map from './components/Map';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* HomePage route */}
                <Route path="/about" element={<About />} /> {/* About route */}
                <Route path="/reviews-connect" element={<ReviewsAndConnect />} /> {/* Reviews route */}
                <Route path="/campus-deals" element={<CampusDeals />} /> {/* Campus Deals route */}
                <Route path="/event-chart" element={<EventChart />} /> {/* Event Chart route */}
                <Route path="/hostel-hub" element={<HostelHub />} /> {/* Hostel Hub route */}
                <Route path="/map" element={<Map />} /> {/* Map route */}
            </Routes>
        </Router>
    );
}

export default App;
