import './App.css';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Community from './components/Community';
import Attend from './components/Attend';
import Collage from './components/Collage';
import OurProduct from './components/Our_Product';
import AboutUs from './components/AboutUs'

function App() {
  return (
    <>
      <Router>

        <div className='container' >
          <Routes>
            <Route exact path="/" element={<Community />} />
            <Route exact path="/Community" element={<Community />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/Attend" element={<Attend />} />
            <Route exact path="/Collage" element={<Collage />} />
            <Route exact path="/OurProduct" element={<OurProduct />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
