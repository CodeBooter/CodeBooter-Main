import './App.css';
import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from "./components/landing/Home.jsx"
import About from './components/About.jsx';
import Internship from './components/Internships/Internship';
import Footer from './components/Footer';
import Services from './components/landing/Services';
import Navbar from './components/Navbar';
import InternshipDetails from './components/Internships/InternshipDetails';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/internship' element={<Internship />} />
        <Route path='internship/detail' element={<InternshipDetails />} />
      </Routes>

    </div>
  );
}

export default App;
