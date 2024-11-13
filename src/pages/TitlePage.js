import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import './TitlePage.css';
import titlePageSchematic from '../images/title-page-schematic.png';
import maltaBoard from '../images/malta-board.png';

const TitlePage = () => {

  /* TO MAKE THE 'I'M A SOFTWARE ENGINEER' ANIMATION */
  const [text] = useState('I\'m a SOFTWARE ENGINEER');
  const [currentIndex, setCurrentIndex] = useState(0);
  const blinkingRef = useRef(null);

  useEffect(() => {

    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(intervalId);
        setInterval(() => {
          blinkingRef.current.style.visibility = blinkingRef.current.style.visibility === 'visible' ? 'hidden' : 'visible';
        }, 500);

      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentIndex, text]);

  const navigate = useNavigate();

  const goToContactMe = () => {
    navigate('/contact-me')
  };
  const openResume = () => {
    window.open(process.env.PUBLIC_URL + '/Alexandra-Savino-Resume.pdf', '_blank')
  };


  /* TO BE ABLE TO SCROLL UP TO THE ABOUT ME PAGE*/
  // const [isScrollingUp, setIsScrollingUp] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(0);
  // const history = useHistory();

  // useEffect(() => { 

  // })



  return (
    <motion.div 
      className="TITLEPAGE_pageContainer" 
      initial={{ opacity:0 }} 
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
      transition={{ duration:1, ease:"easeInOut"  }}
    >
      <div className="TITLEPAGE_contentWrapper">
        <div className="TITLEPAGE_redContainer">
          <div className="TITLEPAGE_circuitRedRectangle"></div>
          <img src={titlePageSchematic} alt="Arbitrary Circuit Schematic" className="TITLEPAGE_circuitSchematicPNG"/>
        </div>

        <div className="TITLEPAGE_rightSideContainer">
          <div className="TITLEPAGE_textContainer">

            <div className="TITLEPAGE_SWEIntroContainer">
              <p className="TITLEPAGE_SWELine small">Hello, I'm <span className="TITLEPAGE_myName">Alexandra Savino</span>.</p>
              <p className="TITLEPAGE_SWELine large">{text.substring(0, currentIndex)} <span ref={blinkingRef}>_</span></p>
            </div> 

            <div className="TITLEPAGE_astroIntroContainer">
              <p className="TITLEPAGE_astroLine large"> Incoming @Meta</p>
              {/* <p className="astroLine small">from</p> */}
              <p className="TITLEPAGE_astroLine small">Astrophysics Grad </p>
              <p className="TITLEPAGE_astroLine large">Columbia University</p>
            </div>

          </div>
        

          <div className="TITLEPAGE_buttonContainer">
            <button className="TITLEPAGE_titleButtons TITLEPAGE_downloadCVButton" onClick={openResume}>
              Download CV
            </button>
            <button className="TITLEPAGE_titleButtons TITLEPAGE_contactMeButton" onClick={goToContactMe}>
              Contact Me
            </button>
          </div>


          <div className="TITLEPAGE_yellowContainer">
            <div className="TITLEPAGE_pngYellowRectangle"></div>
            <img src={maltaBoard} alt="Arbitrary Chip" className="TITLEPAGE_maltaBoardPNG"/>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TitlePage;