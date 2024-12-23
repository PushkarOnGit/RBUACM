import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Events from './Pages/Events';
import Team from './Pages/Team';
import Testimonials from './Pages/Testimonials';
import Navbar from './Components/Navbar';


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