import React, { useState, useEffect } from 'react';
import './WorkProjects.css';
// import xPNG from 'PUBLIC_URL%/icons/x.png';

const WorkProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      date: '2022-09-28',
      title: 'Gravitational Lensing Simulator',
      github_link: 'https://github.com/alexsavino/gravitational-lensing-simulator',
      skills: ['Python','Turtle'],
      description: 'This is a personal project I developed during my sophomore year of college: an educational, interactive gravitational lensing simulator built with Python’s graphics package, Turtle.',
      // associated_image: WP_id1
      // associated_image: require('../images/WPs/WP-id1.png')
    },
    {
      id: 2,
      date: '2023-11-19',
      title: '__',
      github_link: '__',
      skills: [],
      description: '__',
      // associated_image: '__'
    },
  ]);

  const [sortOrder, setSortOrder] = useState('newestToOldest');
  const [skillCounts, setSkillCounts] = useState({});
  const [activeSearchButton, setActiveSearchButton] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    updateSkillCounts(projects);
  }, [projects]);

  const updateSkillCounts = (projects) => {
    const counts = {};
    projects.forEach(project => {
      project.skills.forEach(skill => {
        counts[skill] = (counts[skill] || 0) + 1;
      });
    });
    setSkillCounts(counts);
  };

  const sortProjects = (projects) => {
    return projects.sort((a, b) => {
      if (sortOrder === 'oldestToNewest') {
        return new Date(a.date) - new Date(b.date);
      } else if (sortOrder === 'newestToOldest') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortOrder === 'personalPriority') {
        return a.priority - b.priority;
      }
    });
  };

  const filteredProjects = () => {
    if (selectedSkills.length === 0) {
      return projects;
    }
    return projects.filter(project =>
      selectedSkills.every(skill => project.skills.includes(skill))
    );
  };

  const sortedProjects = sortProjects([...filteredProjects()]);

  // TO FORMAT THE DATE //
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;

  };

  // TO SORT PROJECTS APPROPRIATELY //
  const handleSortButtonClick = (order) => {
    setSortOrder(order);
    setActiveSearchButton(order);
  };

  const handleSkillClick = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills,
 skill]);
    }
  };

  const handleRightSkillButtonClick = (skill) => {
    handleSkillClick(skill);
  };

  const handleSelectedSkillClick = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const ProjectSkills = ({ project }) => {
    return (
      <div className="WORKPROJECTS_skillsContainer">
        {project.skills.map((skill, index) => (
          <button
            key={index}
            className={`WORKPROJECTS_skillBox ${selectedSkills.includes(skill) ? 'selected' : ''}`}
            onClick={() => handleSkillClick(skill)}
          >
            {skill}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div id="workProjects" className="WORKPROJECTS_pageContainer">
      <div className="WORKPROJECTS_contactMeSign">
        <p className="WORKPROJECTS_title">Recent Projects</p>
        <p className="WORKPROJECTS_subtitle">Academic & Business Personal</p>
      </div>

      <div className="WORKPROJECTS_primaryRectangle">
        <div className="WORKPROJECTS_contentContainer">
          <div className="WORKPROJECTS_leftContentContainer">
            <div className="WORKPROJECTS_searchButtonsContainer">
              <button
                className={`WORKPROJECTS_skillBox ${activeSearchButton === 'personalPriority' ? 'clicked' : ''}`}
                onClick={() => handleSortButtonClick('personalPriority')}
              >
                Personal Priority
              </button>
              <button
                className={`WORKPROJECTS_skillBox ${activeSearchButton === 'newestToOldest' ? 'clicked' : ''}`}
                onClick={() => handleSortButtonClick('newestToOldest')}
              >
                Newest To Oldest
              </button>
              <button
                className={`WORKPROJECTS_skillBox ${activeSearchButton === 'oldestToNewest' ? 'clicked' : ''}`}
                onClick={() => handleSortButtonClick('oldestToNewest')}
              >
                Oldest To Newest
              </button>
            </div>

            <div className="WORKPROJECTS_selectedSkills">
              <p>Selected Skills:</p>
              <div className="WORKPROJECTS_selectedSkillsContainer">
                {selectedSkills.map((skill) => (
                  <button
                    key={skill}
                    className="WORKPROJECTS_skillBox"
                    onClick={() => handleSelectedSkillClick(skill)}
                  >
                    {skill}
                    <img src={process.env.PUBLIC_URL + './icons/x.png'} alt="RemoveIcon" className="xImage"/>
                  </button>
                ))}
              </div>
            </div>

            <div className="WORKPROJECTS_allProjectsContainer">
              {sortedProjects.map((project) => (
                <div
                  key={project.id}
                  className="WORKPROJECTS_projectRowContainer"
                >
                  <a href={project.github_link} className="WORKPROJECTS_rowLeft">{formatDate(project.date)}</a>
                   <div className="WORKPROJECTS_rowRight">
                    <a href={project.github_link} className="WORKPROJECTS_projectTitle">{project.title}</a>
                    <ProjectSkills project={project} />
                    <a href={project.github_link} className="WORKPROJECTS_description">{project.description}</a>
                    {project.associated_image && (
                      // <img src={project.associated_image} alt={project.title} />
                      <img src={require(`${project.associated_image}`)} alt={project.title} />
                    )}
                    <hr className="horizontalLine" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DISPLAYING SKILL LIST */}
          <div className="WORKPROJECTS_uniqueSkillsContainer">
            <p className="WORKPROJECTS_projectSearchTitle">Search By Skill</p>
            <ul className="WORKPROJECTS_skillsList">
              {Object.entries(skillCounts).map(([skill, count]) => (
                <li key={skill}>
                  <button
                    className={`WORKPROJECTS_rightSkillButton ${
                      selectedSkills.includes(skill) ? 'selected' : ''
                    }`}
                    onClick={() => handleRightSkillButtonClick(skill)}
                  >
                    {skill} ({count})
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProjects;