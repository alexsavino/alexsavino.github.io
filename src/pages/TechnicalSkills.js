import { useState, useEffect } from "react";
import Trie from "./trie.js";
import "./TechnicalSkills.css";

const dictionary = {
  Python: "Proficient",
  NumPy: "Proficient",
  Pandas: "Proficient",
  Plotly: "Proficient",
  Matplotlib: "Proficient",
  Java: "Proficient",
  HTML: "Proficient",
  CSS: "Proficient",
  GitHub: "Proficient",
  VSCode: "Proficient",
  "Data Visualization": "Proficient",
  UI: "Proficient",
  UX: "Proficient",
  Linux: "Knowledgeable",
  Unix: "Knowledgeable",
  MacOS: "Knowledgeable",
  CLI: "Knowledgeable",
  JavaScript: "Knowledgeable",
  PyCharm: "Knowledgeable",
  Intellij: "Knowledgeable",
  MIPS: "Knowledgeable",
  "iOS Development": "Knowledgeable",
  Xcode: "Knowledgeable",
  Swift: "Knowledgeable",
  SwiftUI: "Knowledgeable",
  MapKit: "Knowledgeable",
  PyTorch: "Some Familiarity",
  "Scikit-learn": "Some Familiarity",
  SciPy: "Some Familiarity",
  NodeJS: "Some Familiarity",
  ReactJS: "Some Familiarity",
  SQL: "Some Familiarity",
  mySQL: "Some Familiarity",
  PostgreSQL: "Some Familiarity",
  Postman: "Some Familiarity",
  "pgAdmin 4": "Some Familiarity",
  "REST APIs": "Some Familiarity",
  Matlab: "Some Familiarity",
};

function TechnicalSkills() {
  const [prefix, setPrefix] = useState('');
  const [experienceSentence, setExperienceSentence] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [myTrie] = useState(new Trie());
  const [showProficientBox, setShowProficientBox] = useState(false);
  const [showKnowledgeableBox, setShowKnowledgeableBox] = useState(false);
  const [showFamiliarBox, setShowFamiliarBox] = useState(false);

  useEffect(() => {
    const words = Object.keys(dictionary);
    words.forEach(word => myTrie.insert(word));
  }, [myTrie]);

  const onChange = (e) => {
    const value = e.target.value;
    setPrefix(value);

    if (value === "") {
      setSuggestions([]);
      setExperienceSentence('');
      setShowProficientBox(false);
      setShowKnowledgeableBox(false);
      setShowFamiliarBox(false);
      return;
    }

    const matchedSuggestions = Object.keys(dictionary).filter((term) =>
      term.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestions(matchedSuggestions);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchSkill(prefix);
    }
  };

  const searchSkill = (query) => {
    const normalizedInput = query.trim().toLowerCase();
    const matchedSkill = Object.keys(dictionary).find((skill) =>
      skill.toLowerCase() === normalizedInput
    );

    if (matchedSkill) {
      const proficiency = dictionary[matchedSkill];
      // let proficiencySentence = "";

      if (proficiency === "Proficient") {
        // proficiencySentence = `I am proficient in ${matchedSkill}.`;
        setShowProficientBox(true);
        setShowKnowledgeableBox(false);
        setShowFamiliarBox(false);
      } else if (proficiency === "Knowledgeable") {
        // proficiencySentence = `I am knowledgeable in ${matchedSkill}.`;
        setShowProficientBox(false);
        setShowKnowledgeableBox(true);
        setShowFamiliarBox(false);
      } else if (proficiency === "Some Familiarity") {
        // proficiencySentence = `I have some familiarity with ${matchedSkill}.`;
        setShowProficientBox(false);
        setShowKnowledgeableBox(false);
        setShowFamiliarBox(true);
      }

      // setExperienceSentence(proficiencySentence);
    } else if (query.trim()) {
      setExperienceSentence(`I have no experience with ${query.trim()} (yet?). :(`);
      setShowProficientBox(false);
      setShowKnowledgeableBox(false);
      setShowFamiliarBox(false);
    }

    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setPrefix(suggestion);
    setSuggestions([]);
    searchSkill(suggestion);
  };

  return (
    <div id="technicalSkills" className="TECHSKILLS_pageContainer">
      <div className="TECHSKILLS_contactMeSign">
        <p className="TECHSKILLS_title">Technical Skills</p>
        <p className="TECHSKILLS_subtitle">Explicitly Stated & Searchable</p>
      </div>

      <div className="TECHSKILLS_primaryRectangle">
        <div className="TECHSKILLS_searchContainer">
          <div className="TECHSKILLS_searchTitleAndBar">
            <div className="TECHSKILLS_searchTitle">
              <p>Search:</p>
            </div>
            {!prefix && (
              <img 
                src={'PUBLIC_URL%/icons/white-search-icon.png'} 
                alt="Search Icon" 
                className="TITLEPAGE_whiteSearchIconPNG"
              />
            )}
            <input
              className="TECHSKILLS_actualSearchBox"
              type="text"
              name="search-bar"
              id="search-bar"
              value={prefix}
              onChange={onChange}
              onKeyDown={handleKeyDown}
            />
          </div>

          {suggestions.length > 0 && (
            <div className="TECHSKILLS_suggestionBox">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="TECHSKILLS_suggestionButton"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {experienceSentence && (
            <div className="TECHSKILLS_searchResult">
              <p>{experienceSentence}</p>
            </div>
          )}
        </div>
        

        <div className="TECHSKILLS_writtenSkills">
          <div className="TECHSKILLS_someFamiliarity">
            <div className="TECHSKILLS_someFamiliarityTitle">
              <p>Some Familiarity:</p>
            </div>
            <div className="TECHSKILLS_someFamiliaritySkills">
              <p>PyTorch, Scikit-learn, SciPy, NodeJS, ReactJS, SQL (mySQL), PostgreSQL, Postman/pgAdmin 4, REST APIs, Matlab</p>
            </div>
          </div>

          <div className="TECHSKILLS_knowledgeable">
            <div className="TECHSKILLS_knowledgeableTitle">
              <p>Knowledgeable:</p>
            </div>
            <div className="TECHSKILLS_knowledgeableSkills">
              <p>Linux/Unix/macOS, CLI, JavaScript, PyCharm, Intellij, MIPS, iOS development (Xcode, Swift, SwiftUI, MapKit)</p>
            </div>
          </div>

          <div className="TECHSKILLS_proficient">
            <div className="TECHSKILLS_proficientTitle">
              <p>Proficient:</p>
            </div>
            <div className="TECHSKILLS_proficientSkills">
              <p>Python (NumPy, Pandas, Plotly, Matplotlib), Java, HTML, CSS, GitHub, VSCode, Data Visualization, UI/UX</p>
            </div>
          </div>
        </div>


        {/* Render the grey boxes based on skill level */}
        {showProficientBox && (
          <div className={`greyBox proficientBox ${showProficientBox ? 'show' : 'hide'}`}></div>
        )}
        {showKnowledgeableBox && (
          <div className={`greyBox knowledgeableBox ${showKnowledgeableBox ? 'show' : 'hide'}`}></div>
        )}
        {showFamiliarBox && (
          <div className={`greyBox familiarBox ${showFamiliarBox ? 'show' : 'hide'}`}></div>
        )}


        <div className="TECHSKILLS_writtenSkills">
          {/* Your skill categories can go here as per the original code */}
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;