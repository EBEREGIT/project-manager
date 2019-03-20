import React from 'react';

// recieve the individual project that has been mapped through in the projectList
const ProjectSummary = ({project}) => {
    return (
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by Ebereplenty</p>
                    <p className="grey-text">3rd March, 3pm</p>
                </div>
            </div>

        </div>
    )
}

export default ProjectSummary;