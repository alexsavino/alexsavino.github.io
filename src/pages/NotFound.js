import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="NOTFOUND_pageContainer">
      <div className="NOTFOUND_textContainer">
        <p className="NOTFOUND_subtitle NOTFOUND_error">
          404 Error:
        </p><p className="NOTFOUND_title">
          Thank you for trying to visit my site!
        </p><p className="NOTFOUND_subtitle">
          Unfortunately, the page you're looking for doesn't seem to exist.
        </p>
      </div>
      <button className="NOTFOUND_button" onClick={handleGoBack}>
        Landing Page
      </button>
    </div>
  )
}

export default NotFound;