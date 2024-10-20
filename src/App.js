


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import About from './components/About';
// import ReviewsAndConnect from './components/ReviewsAndConnect';
// import CampusDeals from './components/CampusDeals';  // Import your other components
// import EventChart from './components/EventChart';
// import HostelHub from './components/HostelHub';
// import Map from './components/Map';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} /> {/* HomePage route */}
//                 <Route path="/about" element={<About />} /> {/* About route */}
//                 <Route path="/reviews-connect" element={<ReviewsAndConnect />} /> {/* Reviews route */}
//                 <Route path="/campus-deals" element={<CampusDeals />} /> {/* Campus Deals route */}
//                 <Route path="/event-chart" element={<EventChart />} /> {/* Event Chart route */}
//                 <Route path="/hostel-hub" element={<HostelHub />} /> {/* Hostel Hub route */}
//                 <Route path="/map" element={<Map />} /> {/* Map route */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;
// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';

import HostelHub from './components/HostelHub';      
import CampusDeals from './components/CampusDeals';
import Map from './components/Map';
import EventChart from './components/EventChart';
import Books from './components/Books'; // Import Books component
import Stationary from './components/Stationary'; // Import Stationery component
import Electronics from './components/Electronics'; // Import Electronics component
// import MapComponent from './MapComponent'; // Import MapComponent TODO: Actually do some one !!!

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                
                <Route path="/hostel-hub" element={<HostelHub />} />
                <Route path="/campus-deals" element={<CampusDeals />} />
                <Route path="/map" element={<Map />} />
                <Route path="/event-chart" element={<EventChart />} />
                <Route path="/books" element={<Books />} />
                <Route path="/stationary" element={<Stationary />} /> {/* Add route for Stationery */}
                <Route path="/electronics" element={<Electronics />} /> {/* Add route for Electronics */}
                <Route path="/cucek-location" element={
                    <div>
                        <h1>CUCEK Location</h1>
                        {/* <MapComponent /> MapComponent will be displayed here */}
                    </div>
                } /> {/* CUCEK Location route */}
            </Routes>
        </Router>
    );
}

export default App;