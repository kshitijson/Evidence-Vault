import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Info from './Components/Info';
import Upload from './Components/Upload';
import View from './Components/View';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Info />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Upload' element={<Upload />}/>
        <Route path='/View' element={<View />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
