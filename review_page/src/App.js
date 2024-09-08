import './App.css';
import Home from './Components/Home';
import Navbar from './Components/NavBar';
import Rating from './Components/Rating';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/rating" element={<><Navbar /><Rating /></>} />
          </Routes>
      </Router>
  );
}
export default App;
