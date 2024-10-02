import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Counter from './components/Counter';
import Contact from './components/Contact';

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
