import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';

import AnimatedRoutes from './generals/AnimatedRoutes';
import DottedBackground from './generals/DottedGraph'; 
// import NavBar from './generals/NavBar';
// import NavBarLayout from './gen erals/NavBarLayout';

const App = () => {

  return (
    <div className="app-container">
      <DottedBackground/>
      <Router> 
        {/* <NavBar /> */}
        <AnimatedRoutes />
      </Router>
    </div>
    
  );

};

export default App;