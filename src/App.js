import React from "react";
import HomePage from './components/HomePage';
import firebaseApp from './firebase'; // Firebase is initialized here but doesn't need to be used directly in App

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
