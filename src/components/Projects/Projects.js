import React from 'react';
import projects from '../../projects.json';
import { GrGithub } from "react-icons/gr";

function ProjectCard(props) {
  const handleIconClick = () => {
    window.open(props.github, '_blank');
  };

  return (
    <div className='card'>
      <div className='img-container'>
        <img alt={props.name} src={props.image}/>
      </div>
      <div className='content'>
        <ul>
          <li>
            <p className='project-title'>{props.name}</p>
          </li>
          <li>
            <a href={props.link} className='project-link'> Click here to see the deployed application!</a>
          </li>
          <li>
            <div className='project-icons'>
              <GrGithub onClick={handleIconClick} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}


function Wrapper(props) {
    return <div className='wrapper'>{props.children}</div>;
}

function Projects () {
    return (
        <>
        <div className='project'>
        </div>

        <Wrapper>
            {projects.map((project) => (
                <ProjectCard
                name={project.name}
                key={project.id}
                image={project.image}
                github={project.github}
                link={project.link}
                />
            ))}
        </Wrapper>
        </>
    );
}

export default Projects;