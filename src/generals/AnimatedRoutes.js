import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import TitlePage from '../pages/TitlePage';
import ContactMe from '../pages/ContactMe';
// import AboutMe from '../pages/AboutMe';
// import WorkProjects from '../pages/WorkProjects';
// import CreativeProjects from '../pages/CreativeProjects';
import TechnicalSkills from '../pages/TechnicalSkills'
import NotFound from '../pages/NotFound';

const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<TitlePage />} />
        <Route path="/contact-me" element={<ContactMe />} />
        {/* <Route path="/contact-me" element={<NavBarLayout><ContactMe /></NavBarLayout>} /> */}
        {/* <Route path="/about-me" element={<AboutMe />} /> */}
        {/* <Route path="/about-me" element={<NavBarLayout><AboutMe /></NavBarLayout>} /> */}
        {/* <Route path="/recent-projects" element={<WorkProjects />}/>
        <Route path="/creative-projects" element={<CreativeProjects />} /> */}
        <Route path="/technical-skills" element={<TechnicalSkills />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </AnimatePresence>
  )
};

export default AnimatedRoutes;