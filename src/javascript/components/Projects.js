import React from 'react';

const Project = (props) => {
	const { img } = props;
	return (
		<div className='project-showcase'>
			<img src={img} />
		</div>
	);
};

const Projects = () => (
	<section id='projects' className='col-2'>
		<div className='overflow-hide'>
			<div className='overflow'>
				<Project img='https://www.freeprivacypolicy.com/public/uploads/2018/09/sample-privacy-policy-template-update.jpg' />
				<Project img='https://www.freeprivacypolicy.com/public/uploads/2018/09/sample-privacy-policy-template-update.jpg' />
				<Project img='https://www.freeprivacypolicy.com/public/uploads/2018/09/sample-privacy-policy-template-update.jpg' />
				<Project img='https://www.freeprivacypolicy.com/public/uploads/2018/09/sample-privacy-policy-template-update.jpg' />
			</div>
		</div>
		<div className='overflow-hide'>
			<div className='overflow'>
				<Project img='https://www.freeprivacypolicy.com/public/uploads/2018/09/sample-privacy-policy-template-update.jpg' />
				<Project img='https://www.freeprivacypolicy.com/public/uploads/2018/09/sample-privacy-policy-template-update.jpg' />
				<Project img='https://www.freeprivacypolicy.com/public/uploads/2018/09/sample-privacy-policy-template-update.jpg' />
				<Project img='https://www.freeprivacypolicy.com/public/uploads/2018/09/sample-privacy-policy-template-update.jpg' />
			</div>
		</div>
		<div className='overflow-hide'>
			<div className='overflow'>
				<Project img='https://www.freeprivacypolicy.com/public/uploads/2018/09/sample-privacy-policy-template-update.jpg' />
				<Project img='https://www.freeprivacypolicy.com/public/uploads/2018/09/sample-privacy-policy-template-update.jpg' />
				<Project img='https://www.freeprivacypolicy.com/public/uploads/2018/09/sample-privacy-policy-template-update.jpg' />
				<Project img='https://www.freeprivacypolicy.com/public/uploads/2018/09/sample-privacy-policy-template-update.jpg' />
			</div>
		</div>
	</section>
);

export default Projects;
