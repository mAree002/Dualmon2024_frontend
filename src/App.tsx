import './App.css'
import ItemMatch from './components/ItemMatch';
import SecondPage from './components/SecondPage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} 
from "react-router-dom";
import Navigation from './components/Navigation'
import Home from './components/Home';
import About from './components/Aboout';
import Contacts from './components/Contacts';
import Navigation_header from './components/navigation_header'
import InstructionsBox from './components/Secondlay.tsx'
import Instructions from './components/Instructions.tsx';

function App() {
  return (
    <>
    <InstructionsBox/>
    <Navigation_header />
      <br />
    <Router>
      <Navigation />
      <Routes>
        <Route path='/SecondPage' element={<SecondPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
    </Routes>
    </Router>
    </>
  );

}

export default App;