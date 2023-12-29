// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksPage from './pages/BooksPage';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';
import './styles/navbar.css';
import './styles/homepage.css'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
