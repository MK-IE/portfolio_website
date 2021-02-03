import React from 'react';
import Profile from './components/Profile';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Projects from './components/Projects';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
	<Router>
		<Header />
		<Showcase>
			<Profile />
			<Projects />
		</Showcase>
	</Router>
);

export default App;
