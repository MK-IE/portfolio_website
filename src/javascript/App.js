import React from 'react';
import Profile from './components/Profile';
import Showcase from './components/Showcase';
import Projects from './components/Projects';

const App = () => (
    <Showcase>
        <Profile />
        <Projects />
    </Showcase>
);

export default App;
