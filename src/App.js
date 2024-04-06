import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Header from './components/header.js';
import Home from './pages/home.js';
import Creation from './pages/creation.js';
import LearnMore from './pages/learnmore.js';
import Contact from './pages/contact.js';
import About from './pages/about.js';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/learnmore' element={<LearnMore />} />
          <Route path='/creation' element={<Creation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
