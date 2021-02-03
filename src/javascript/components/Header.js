import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<nav>
			<NavLink to='/' className='nav-link'>
				Portfolio
			</NavLink>
			<NavLink to='/blog' className='nav-link'>
				Blog
			</NavLink>
		</nav>
	</header>
);

export default Header;
