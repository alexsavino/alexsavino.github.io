import { useState } from "react";
import Trie from "./trie.js";
import "./TechnicalSkills.css";


const dictionary = {
  words: [
    'Python', 'NumPy', 'Pandas', 'Plotly', 'Matplotlib', 'Java', 'HTML', 'CSS',
    'GitHub', 'VSCode', 'Data Visualization', 'UI/UX', 'Linux', 'Unix', 'MacOS',
    'CLI', 'JavaScript', 'PyCharm', 'Intellij', 'MIPS', 'iOS Development', 'Xcode',
    'Swift', 'SwiftUI', 'MapKit', 'PyTorch', 'Scikit-learn', 'SciPy', 'NodeJS',
    'ReactJS', 'SQL', 'mySQL', 'PostgreSQL', 'Postman', 'pgAdmin 4', 'REST APIs', 'MatLab'
  ]
};

function TechnicalSkills() {
  const [prefix, setPrefix] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  var myTrie = new Trie();

  (async () => {
    const words = dictionary.words;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      myTrie.insert(word);
    }
  })();

  const onChange = (e) => {
    const value = e.target.value;
    setPrefix(value);

    const words = value.split(" ");
    const triePrefix = words[words.length - 1].toLowerCase();
    const foundWords = myTrie.find(triePrefix);

    if (foundWords.length > 0 && value !== "" && value[value.length - 1] !== " ") {
      setSuggestions(foundWords);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      setPrefix(suggestions[0]);
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
          <div className="TECHSKILLS_suggestionBox">
            {suggestions.map((suggestion, index) => (
              <p key={index}>{suggestion}</p>
            ))}
          </div>
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

      </div>
    </div>
  );
}

export default TechnicalSkills;