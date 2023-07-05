import { Grid } from '@mui/material';
import React, { useState } from 'react';
import SideNavBar from './SideNavBar';
import SearchSection from './SearchSection';

const BodySection = () => {
	const [toggle, setToggle] = useState('false');
	return (
		<>
			<Grid container>
				<Grid item lg={0} md={0} sm={0} xs={0}>
					<SideNavBar />
				</Grid>
				<Grid item lg={11} md={11} sm={11} xs={11} mx='auto'>
					<SearchSection />
				</Grid>
			</Grid>
		</>
	);
};

export default BodySection;
