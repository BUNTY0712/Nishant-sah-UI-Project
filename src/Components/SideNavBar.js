import React, { useState } from 'react';
import {
	Grid,
	Box,
	Paper,
	useMediaQuery,
	useTheme,
	Hidden,
} from '@mui/material';
const SideNavBar = () => {
	const [data, setData] = useState(false);
	const theme = useTheme();
	const small = useMediaQuery(theme.breakpoints.down('sm'));
	const [toggle, setToggle] = useState(true);
	return (
		<>
			{toggle ? (
				<Box
					style={{
						padding: ' 20px',
						background: '#000033',
						color: 'white',
						height: '90vh',
						zIndex: '1',
						position: 'absolute',
						// zIndex: small ? '1' : 'none',
						// position: small ? '' : 'none',
					}}>
					<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box>
							<i class='fa-solid fa-shop'></i>
						</Box>
						<Box ml={1} style={{ fontWeight: 'bold' }}>
							Machinary And pa...
						</Box>
						<Box onClick={() => setToggle(false)}>
							<i class='fa-solid fa-angle-right'></i>
						</Box>
					</Box>
					<Box mt={2}>
						<Box>
							<span>
								<i class='fa-solid fa-house'></i>
							</span>
							<span style={{ marginLeft: '10px' }}>Home</span>
						</Box>
					</Box>
					<Box
						mt={2}
						style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box>
							<span>
								<i class='fa-solid fa-user-group'></i>
							</span>
							<span style={{ marginLeft: '10px' }}>Profile</span>
						</Box>
						<Box>
							<i class='fa-solid fa-plus'></i>
						</Box>
					</Box>
					{/* items */}
					<Box
						mt={2}
						style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box>
							<span>
								<i class='fa-sharp fa-solid fa-bag-shopping'></i>
								{/* <i class='fa-solid fa-cart-shopping'></i> */}
							</span>
							<span style={{ marginLeft: '10px' }}>Items</span>
						</Box>
						<Box>
							<i class='fa-solid fa-plus'></i>
						</Box>
					</Box>
					{/* sales */}
					<Box
						mt={2}
						style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box>
							<span>
								<i class='fa-sharp fa-solid fa-newspaper'></i>
							</span>
							<span style={{ marginLeft: '10px' }}>Sale</span>
						</Box>
						<Box>
							<i class='fa-solid fa-angle-down'></i>
						</Box>
					</Box>
					{/* purchase  */}
					<Box
						mt={2}
						style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box>
							<span>
								<i class='fa-solid fa-cart-shopping'></i>
							</span>
							<span style={{ marginLeft: '10px' }}>Purchase</span>
						</Box>
						<Box>
							<i class='fa-solid fa-angle-down'></i>
						</Box>
					</Box>
					{/* expanses */}
					<Box
						mt={2}
						style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box>
							<span>
								<i class='fa-solid fa-wallet'></i>
							</span>
							<span style={{ marginLeft: '10px' }}>Expanses</span>
						</Box>
						<Box>
							<i class='fa-solid fa-angle-down'></i>
						</Box>
					</Box>
					{/* Cash & Bank  */}
					<Box
						onClick={() => setData(!data)}
						mt={2}
						style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box>
							<span>
								<i class='fa-sharp fa-solid fa-building-columns'></i>
							</span>
							<span style={{ marginLeft: '10px' }}>Cash & Bank</span>
						</Box>
						<Box>
							<i class='fa-solid fa-angle-down'></i>
						</Box>
					</Box>
					{data && (
						<Box>
							<Box
								mt={2}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									paddingLeft: '22px',
								}}>
								<Box>Bank Account </Box>{' '}
								<Box>
									<i class='fa-solid fa-plus'></i>{' '}
								</Box>
							</Box>
							{/* Cheque  */}
							<Box
								mt={2}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									paddingLeft: '22px',
								}}>
								<Box>Cash in Hand </Box>{' '}
								<Box>
									<i class='fa-solid fa-plus'></i>{' '}
								</Box>
							</Box>
							{/* Cash  */}
							<Box
								mt={2}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									paddingLeft: '22px',
								}}>
								<Box>Cash </Box>{' '}
								<Box>
									<i class='fa-solid fa-plus'></i>{' '}
								</Box>
							</Box>
							{/* loan  */}
							<Box
								mt={2}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									paddingLeft: '22px',
								}}>
								<Box>Loan </Box>{' '}
								<Box>
									<i class='fa-solid fa-plus'></i>{' '}
								</Box>
							</Box>
						</Box>
					)}
				</Box>
			) : (
				<Box
					onClick={() => setToggle(true)}
					style={{
						width: '30px',
						background: '#000033',
						color: 'white',
						textAlign: 'center',
						height: '100vh',
					}}>
					<Box mt={2}>
						<i class='fa-solid fa-angle-right'></i>{' '}
					</Box>
				</Box>
			)}
		</>
	);
};

export default SideNavBar;
