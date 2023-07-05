import {
	Grid,
	Box,
	Paper,
	useMediaQuery,
	useTheme,
	Hidden,
} from '@mui/material';
import React from 'react';

const HeaderSection = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	const small = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<>
			<Grid style={{ padding: '10px' }} container>
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Hidden only={['xs', 'sm']}>
							<Box style={{ display: 'flex' }}>
								<Box ml={1}>Company</Box>
								<Box ml={1}>Help</Box>
								<Box ml={1}>Shortcut</Box>
								<Box ml={1}>
									<i class='fa-solid fa-rotate-right'></i>
								</Box>
							</Box>
						</Hidden>
						<Box style={{ display: 'flex' }}>
							<Box style={{ display: matches ? 'none' : '' }}>
								Customer support:{' '}
							</Box>
							<Box style={{ fontSize: small ? '10px' : '' }}>
								&nbsp;<i class='fa-solid fa-phone'> &nbsp;</i>
							</Box>
							<Box style={{ fontSize: small ? '10px' : '' }}>
								{' '}
								(+91) 912245464 |
							</Box>
							<Box style={{ fontSize: small ? '10px' : '' }}>
								&nbsp;
								<i style={{ color: 'green' }} class='fa-brands fa-whatsapp'>
									{' '}
								</i>{' '}
								(+91) 6624561245
							</Box>
						</Box>

						<Box style={{ display: 'flex' }}>
							<Box ml={1}>
								<i class='fa-sharp fa-solid fa-minus'></i>
							</Box>
							<Box ml={3}>
								<i class='fa-regular fa-square'></i>
							</Box>{' '}
							<Box ml={3}>
								<i class='fa-solid fa-xmark'></i>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
			{/* <hr /> */}
		</>
	);
};

export default HeaderSection;
