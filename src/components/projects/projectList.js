import React from 'react';
import ProjectSummary from './projectSummary';

// using destructuring to recieve the project list as a props from the dashboard component
const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            {/* loop through the project list props  */}
            { projects && projects.map(project =>{
                return(
                    <ProjectSummary project={project} key={project.id}/>
                )
            })}
        </div>
    )
}

export default ProjectList;