import React from 'react';
import DRAWING_TOGETHA from '../../css/images/drawing-togetha.webp';
import FOODBER from '../../css/images/foodber.webp';
import FOOD_PYRAMID from '../../css/images/food-pyramid.webp';
import SIMON_SAYS from '../../css/images/simon-says.webp';
import CREATE_REACT_INVESTMENT from '../../css/images/create-react-investment.webp';
import TABLE from '../../css/images/table.webp';
import PROJECT_16X16 from '../../css/images/project-16x16.webp';

const Project = ({ img, title, href }) => (
    <div className='project-showcase'>
        <a href={href} target='_blank'>
            <img src={img} alt={title} />
        </a>
    </div>
);

const Projects = () => (
    <section id='projects' className='col-2'>
        <div className='overflow-hide'>
            <h3>Personal Projects</h3>
            <div className='overflow'>
                <Project
                    img={DRAWING_TOGETHA}
                    title='Drawing Togetha'
                    href='https://drawingwithfriendstogetha.herokuapp.com/'
                />
                <Project
                    img={FOODBER}
                    title='Foodber'
                    href='https://github.com/InferNovac/foodber'
                />
                <Project
                    img={FOOD_PYRAMID}
                    title='Food Pyramid'
                    href='https://marcinkrzykowski.ie/projects/food-pyramid'
                />
                <Project
                    img={SIMON_SAYS}
                    title='Simon Says'
                    href='https://marcinkrzykowski.ie/projects/simon-says'
                />
            </div>
        </div>
        <div className='overflow-hide'>
            <h3>School Projects</h3>
            <div className='overflow'>
                <Project
                    img={CREATE_REACT_INVESTMENT}
                    title='Create-React-Investment'
                    href='https://create-react-f93a3.web.app/'
                />
                <Project
                    img={TABLE}
                    title='Grade Table'
                    href='https://marcinkrzykowski.ie/projects/grade-table'
                />
            </div>
        </div>
        <div className='overflow-hide'>
            <h3>Projects I contribute to</h3>
            <div className='overflow'>
                <Project
                    img={PROJECT_16X16}
                    title='Project-16x16'
                    href='https://github.com/InferNovac/Project-16x16'
                />
            </div>
        </div>
    </section>
);

export default Projects;
