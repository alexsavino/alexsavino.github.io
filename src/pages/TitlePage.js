import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
    navigate('#/contact-me')
  }


  return (
    <div className="TITLEPAGE_pageContainer">
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
              <p className="TITLEPAGE_astroLine large">Incoming Intern @Meta</p>
              {/* <p className="astroLine small">from</p> */}
              <p className="TITLEPAGE_astroLine large">Astrophysics Graduate from Columbia University</p>
            </div>

          </div>
        

          <div className="TITLEPAGE_buttonContainer">
            <button className="TITLEPAGE_titleButtons TITLEPAGE_downloadCVButton" onClick={() => window.open('../images/Alexandra-Savino-Resume.pdf', '_blank')}>
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
    </div>
  );
};

export default TitlePage;