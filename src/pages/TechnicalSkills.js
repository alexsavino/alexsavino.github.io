import React, { useState } from 'react';
import './TechnicalSkills.css';

const TechnicalSkills = () => {

  // TO BE ABLE TO SEARCH MY SKILLS
  const allSkillsDict = {'Python': 'proficient in', 'NumPy': 'proficient in', 'Pandas': 'proficient in', 'Plotly': 'proficient in', 'Matplotlib': 'proficient in', 'Java': 'proficient in', 'HTML': 'proficient in', 'CSS': 'proficient in', 'GitHub': 'proficient in', 'VSCode': 'proficient in', 'Data Visualization': 'proficient in', 'UI/UX': 'proficient in',
    'Linux': 'knowledgeable in', 'Unix': 'knowledgeable in', 'macOS': 'knowledgeable in', 'CLI': 'knowledgeable in', 'JavaScript': 'knowledgeable in', 'PyCharm': 'knowledgeable in', 'Intellij': 'knowledgeable in', 'MIPS': 'knowledgeable in', 'iOS Development': 'knowledgeable in', 'Xcode': 'knowledgeable in', 'Swift': 'knowledgeable in', 'SwiftUI': 'knowledgeable in', 'MapKit': 'knowledgeable in',
    'PyTorch': 'some familiarity with', 'Scikit-learn': 'some familiarity with', 'SciPy': 'some familiarity with', 'NodeJS': 'some familiarity with', 'ReactJS': 'some familiarity with', 'SQL': 'some familiarity with', 'mySQL': 'some familiarity with', 'PostgreSQL': 'some familiarity with', 'Postman': 'some familiarity with', 'pgAdmin 4': 'some familiarity with', 'REST APIs': 'some familiarity with', 'Matlab': 'some familiarity with'
  }

  const [searchTerm, setSearchTeam] = useState('');



  return (
    <div id="technicalSkills" className="TECHSKILLS_pageContainer">

      <div className="TECHSKILLS_contactMeSign">
        <p className="TECHSKILLS_title">Technical Skills</p>
        <p className="TECHSKILLS_subtitle">Explicitly Stated & Searchable</p>
      </div>

      <div className="TECHSKILLS_primaryRectangle">
        




        <div className="TECHSKILLS_searchContainer">
          <div className="TECHSKILLS_searchTitle">
            <p>Search:</p>
          </div>
          <input 
            className="TECHSKILLS_actualSearchBox"
            type="text"
            // value={searchedSkill}
            placeholder={"Type the skill you're interested in."}
          />
        </div>




        <div className="TECHSKILLS_writtenSkills">

          <div className="TECHSKILLS_someFamiliarity">
            <div className="TECHSKILLS_someFamiliarityTitle">
              <p>Some Familiarity:</p>
            </div>
            <div className="TECHSKILLS_someFamiliaritySkills">
              <p>PyTorch, Sklearn, SciPy, NodeJS, ReactJS, SQL (mySQL), PostgreSQL, Postman/pgAdmin 4, REST APIs, Matlab</p>
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
  )
}

export default TechnicalSkills;