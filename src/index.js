import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components';
import About from './components';
import Counter from './components';
import Contact from './components';

function App() {
return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Counter" element={<Counter />} />
      <Route path="/Contact" element={<Contact />} />      
    </Routes>
  </Router>
);
}
ReactDOM.render(<App />, document.getElementById('root'));
