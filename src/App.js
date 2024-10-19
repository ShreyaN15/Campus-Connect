
import firebaseApp from './firebase'; // Firebase is initialized here but doesn't need to be used directly in App
// src/App.jsx
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import ReviewsAndConnect from './components/ReviewsAndConnect';

function App() {
    return (
        <div>
            <HomePage />
            <About />
            <ReviewsAndConnect />
        </div>
    );
}

export default App;