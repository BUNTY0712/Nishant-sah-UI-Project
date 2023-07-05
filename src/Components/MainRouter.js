import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
const MainRouter = () => {
	return (
		<>
			<div>
				<Router>
					<Routes>
						<Route exact path={'/'} element={<HomePage />}></Route>
					</Routes>
				</Router>
			</div>
		</>
	);
};

export default MainRouter;
