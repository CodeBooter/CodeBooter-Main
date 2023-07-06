import './App.css';
import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from "./components/Home.jsx"
import About from './components/About.jsx';
import Internship from './components/Internship';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Routes>
       <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/internship" element={<Internship />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
