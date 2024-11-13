import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSendMessage = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    setSubjectError('');
    setMessageError('');

    let hasError = false;

    if (!trimmedSubject) {
      setSubjectError('The subject is required!');
      hasError = true;
    }

    if (!trimmedMessage) {
      setMessageError('A message is required!');
      hasError = true;
    }

    if (hasError) return;

    const myEmail = "alexandra.v.savino@gmail.com";

    const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(trimmedSubject + ' (from ' + trimmedName + ')')}&body=${encodeURIComponent(trimmedMessage)}`;

    window.location.href = mailtoLink;

    setIsSubmitted(true);
    setName('');
    setSubject('');
    setMessage('');
  };

  return (
    <div id="contactMe" className="CONTACTME_pageContainer">
      <div className="CONTACTME_contactMeSign">
        <p className="CONTACTME_title">Contact Me</p>
        <p className="CONTACTME_subtitle">I'd love to connect!</p>
      </div>

      <div className="CONTACTME_primaryRectangle">
        {isSubmitted ? (
          <div className="CONTACTME_thankYouMessage">
            <h2>Thank you for your message!</h2>
            <h3>I'll reach back out to you shortly.</h3>
          </div>
        ) : (
          <div className="CONTACTME_inputContainer">
            <div className="CONTACTME_inputBoxContainer">
              <label htmlFor="name">Name</label>
              <input
                className={`CONTACTME_inputBox`}
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Jane Doe"
                required
              />
            </div>

            <div className="CONTACTME_inputBoxContainer">
              <label htmlFor="subject">Subject</label>
              <input
                className={`CONTACTME_inputBox ${subjectError ? 'error' : ''}`}
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(event) => {
                  setSubject(event.target.value);
                  setSubjectError('');
                }}
                placeholder={subjectError || 'Subject of your message'}
                required
              />
            </div>

            <div className="CONTACTME_inputBoxContainer">
              <label htmlFor="message">Message</label>
              <textarea
                className={`CONTACTME_inputBox CONTACTME_messageBox ${messageError ? 'error' : ''}`}
                id="message"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  setMessageError('');
                }}
                placeholder={messageError || 'Type your message here.'}
                required
              />
            </div>

            <button className="CONTACTME_submitButton" onClick={handleSendMessage}>
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMe;