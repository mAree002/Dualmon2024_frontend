import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
}
  from "react-router-dom";
import HomePage from './pages/HomePage.tsx';
import NavigationHeader from './components/NavigationHeader.tsx'
import ItemMatchPage from './pages/ItemMatchPage.tsx'
import NavigationFooter from './components/NavigationFooter.tsx';

function App() {
  return (
    <>
      <Router>
        <NavigationHeader />
        <Routes>
          <Route path='/ItemMatch' element={<ItemMatchPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <NavigationFooter />
      </Router>
    </>
  );

}

export default App;