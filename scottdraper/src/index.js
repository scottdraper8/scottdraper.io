// NODE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// IMPORT PAGES
import Home from './pages/Home';
import Exhibitions from './pages/Exhibitions';
import Learning from './pages/Learning';

// IMPORT COMPONENTS
import reportWebVitals from './reportWebVitals';

// IMPORT STYLES
import './styles/main.css';
import './styles/reset.css';

// CREATE APP
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/exhibitions" element={<Exhibitions />} />
                <Route path="/learning" element={<Learning />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

// APP PERFORMANCE
// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log)) or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();