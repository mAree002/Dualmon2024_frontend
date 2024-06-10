import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} 
from "react-router-dom";
import Home from './components/Home';
import Navigation_header from './components/navigation_header'
import InstructionsBox from './components/Secondlay.tsx'
import Item_match from './components/Item-Match';
// import OtherPage from './components/OtherPage'

function App() {
  return (
    <>
    <InstructionsBox/>
    <Navigation_header />
      <br />
    <Router>
    <Navigation_header />
      <Routes>
        <Route path='/Item-Match' element={<Item_match />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );

}

export default App;