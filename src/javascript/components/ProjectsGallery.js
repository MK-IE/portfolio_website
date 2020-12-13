import React from "react";

const ProjectGallery = ({ projects }) => {
    const PROJECT_LIST = [];

    for (const project of projects) {
        PROJECT_LIST.push(
            <div key={project} className="project">
                <h1 className="project-title">{project.title}</h1>
                <h2 className="mt-1">{project.subHeading}</h2>
            </div>
        );
    }

    return <div className="mt-6 project-container">{PROJECT_LIST}</div>;
};

export default ProjectGallery;
