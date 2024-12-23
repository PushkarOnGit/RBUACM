import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Team from './Components/Team';
import Testimonials from './Components/Testimonials';
import Events from './Components/Events';

import '../src/styles/App.css';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;