import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Header from './components/header.js';
import Home from './pages/home.js';
import Search from './pages/search.js';
import Creation from './pages/creation.js';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/creation' element={<Creation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
