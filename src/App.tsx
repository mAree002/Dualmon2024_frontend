import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation'
import Home from './components/Home';
import About from './components/Aboout';
import Contacts from './components/Contacts';
// import OtherPage from './components/OtherPage'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="/other-page" element={<OtherPage/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;