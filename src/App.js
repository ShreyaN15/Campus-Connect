
import firebaseApp from './firebase'; // Firebase is initialized here but doesn't need to be used directly in App
// src/App.jsx
import React from 'react';
import HomePage from './components/HomePage';
import About from './components/About';

function App() {
    return (
        <div>
            <HomePage />
            <About />
        </div>
    );
}

export default App;