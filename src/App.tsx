import React from 'react';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import routes from './constants/routes';

// Set up a ReactLocation instance
const location = new ReactLocation();

function App() {

	return (
		<Router
			location={location}
			routes={routes}
		>
			<Outlet />
		</Router>
	)
}

export default App
