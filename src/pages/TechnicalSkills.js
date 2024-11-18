import { useState } from "react";
import Trie from "./trie.js";
import "./TechnicalSkills.css";
import whiteSearchIcon from '../images/white-search-icon.png';

// Dictionary containing skills with their proficiency levels as values
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
  const [prefix, setPrefix] = useState('');  // Stores the current search value
  const [experienceSentence, setExperienceSentence] = useState(''); // Stores the experience sentence
  const [suggestions, setSuggestions] = useState([]); // Stores the suggestions based on search prefix

  var myTrie = new Trie();

  // Initialize trie with words
  (async () => {
    const words = Object.keys(dictionary);
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      myTrie.insert(word);
    }
  })();

  const onChange = (e) => {
    const value = e.target.value; // Keep spaces intact in the search input
    setPrefix(value);

    // Clear the displayed sentence if the search bar is empty
    if (value === "") {
      setSuggestions([]);  // Clear suggestions when input is empty
      setExperienceSentence(''); // Clear the sentence when input is empty
      return;
    }

    // Process multi-word phrases
    const matchedSuggestions = Object.keys(dictionary).filter((term) =>
      term.toLowerCase().startsWith(value.toLowerCase()) // Match by prefix (case-insensitive)
    );

    setSuggestions(matchedSuggestions); // Set suggestions based on user input
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const normalizedInput = prefix.trim().toLowerCase();
      const matchedSkill = Object.keys(dictionary).find((skill) =>
        skill.toLowerCase() === normalizedInput
      );

      if (matchedSkill) {
        const proficiency = dictionary[matchedSkill];
        
        // Build the proficiency sentence based on the skill's proficiency level
        let proficiencySentence = "";
        if (proficiency === "Proficient") {
          proficiencySentence = `I am proficient in ${matchedSkill}.`;
        } else if (proficiency === "Knowledgeable") {
          proficiencySentence = `I am knowledgeable in ${matchedSkill}.`;
        } else if (proficiency === "Some Familiarity") {
          proficiencySentence = `I have some familiarity with ${matchedSkill}.`;
        }

        setExperienceSentence(proficiencySentence);
      } else {
        setExperienceSentence(`I have no experience with "${prefix.trim()}".`);
      }

      setSuggestions([]); // Clear suggestions after pressing Enter
    }
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
                src={whiteSearchIcon} 
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
              onKeyDown={handleKeyDown}  // Listen for the Enter key
            />
          </div>
        </div>

        {/* Display the search result after hitting Enter */}
        {experienceSentence && (
          <div className="TECHSKILLS_searchResult">
            <p>{experienceSentence}</p>
          </div>
        )}

        {/* Suggestion Box */}
        {suggestions.length > 0 && (
          <div className="TECHSKILLS_suggestionBox">
            {suggestions.map((suggestion, index) => (
              <p key={index}>{suggestion}</p>
            ))}
          </div>
        )}

        {/* Skill blocks */}
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

      </div>
    </div>
  );
}

export default TechnicalSkills;