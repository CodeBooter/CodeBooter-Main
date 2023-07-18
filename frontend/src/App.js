import './App.css';
import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from "./components/home/Home"
import About from './components/About';
import Internship from './components/internships/Internship';
import InternshipDetails from './components/internships/InternshipDetails';
import Accomplishment from './verify/Accomplishment';


function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/accomplishment' element={<Accomplishment />} />
          <Route path='/about' element={<About />} />
          <Route path='/internship' element={<Internship />} />
          <Route path='internship/detail' element={<InternshipDetails />} />
          </Route>
      </Routes>

        </div>
        );
}

        export default App;
