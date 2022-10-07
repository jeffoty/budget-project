import React from 'react';

import './style.css'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';

import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';

const App = () => {
	let activeClassName = "nav-active"
	return (
		< BrowserRouter>
		    <header>
				<h1>Budget Planner</h1>
			</header>
			<nav>
				<NavLink to='' className={({ isActive }) => isActive && activeClassName}>Home</NavLink>
				<NavLink to='about' className={({ isActive }) => isActive && activeClassName}>About</NavLink>
				<NavLink to='contact' className={({ isActive }) => isActive && activeClassName}>Contact</NavLink>
			</nav>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='about' element={<About/>} />
				<Route path='contact' element={<Contact/>} />
			</Routes>
			
		</BrowserRouter>
	);
};

export default App;