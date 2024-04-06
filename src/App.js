import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Header from './components/header.js';
import Home from './pages/home.js';
import Search from './pages/search.js';
import Creation from './pages/creation.js';
import LearnMore from './pages/learnmore.js';
import Contact from './pages/contact.js';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/learnmore' element={<LearnMore />} />
          <Route path='/creation' element={<Creation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
