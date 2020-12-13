import React from "react";
import NavBar from "./components/NavBar";
import ProjectGallery from "./components/ProjectsGallery";

const projects = [
    {
        title: "First Card",
        subHeading: "Lorem",
    },
    { title: "Second Card", subHeading: "Lorem" },
    { title: "Third Card", subHeading: "Lorem" },
    { title: "Fourth Card", subHeading: "Lorem" },
    { title: "Fifth Card", subHeading: "Lorem" },
    { title: "Sixth Card", subHeading: "Lorem" },
];

const App = () => (
    <div>
        <NavBar />
        <ProjectGallery projects={projects} />
    </div>
);

export default App;
