import React from "react";
import HomePage from './components/HomePage';
import firebaseApp from './firebase'; // Firebase is initialized here but doesn't need to be used directly in App
import './index.css'; // or './tailwind.css', depending on your CSS file name

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
