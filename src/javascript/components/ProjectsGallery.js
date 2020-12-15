import React, { useState } from "react";

const ProjectGallery = ({ projects }) => {
    const [position, updatePosition] = useState(0);

    const PROJECT_LIST = [];

    PROJECT_LIST.push(
        <button
            className="project-btn"
            onClick={() => updatePosition(position - 100)}
        >
            LEFT
        </button>
    );

    for (let project = 0; project < projects.length; project++) {
        PROJECT_LIST.push(
            <div key={project} className="project">
                <h1 className="project-title">{projects[project].title}</h1>
                <h2 className="mt-1">{projects[project].subHeading}</h2>
            </div>
        );
    }

    PROJECT_LIST.push(
        <button
            className="project-btn-right"
            onClick={() => updatePosition(position + 100)}
        >
            RIGHT
        </button>
    );

    return (
        <div
            className="mt-6 project-container"
            style={{ transform: `translateX(${position}px)` }}
        >
            {PROJECT_LIST}
        </div>
    );
};

export default ProjectGallery;
