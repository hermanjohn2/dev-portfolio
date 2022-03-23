import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// import Contact from './pages/Contact';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Navigation from './components/Navigation';

const App = () => {
	return (
		<div className="font-main lg:bg-gradient-to-b lg:from-black lg:to-dark-gray bg-black w-full h-full lg:h-screen">
			<Navigation />
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="contact" element={<Contact />} /> */}
					<Route path="projects" element={<Projects />} />
					<Route path="about" element={<AboutMe />} />
					<Route
						path="*"
						element={
							<main>
								<h1>404</h1>
							</main>
						}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default App;
