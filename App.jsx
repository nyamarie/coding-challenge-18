// src/App.jsx
import React from 'react';
import './App.css';
import Greeting from './components/Greeting';

function App() {
    return (
        <>
        <h1>Vite + React</h1>
        <div className="card">
            <p>Welcome to your React App.</p>
            </div>
            
            {/* Custom Greeting component */}
            <greeting />
            </>
    );
}

export default App;