// import { Grid, Box } from '@mui/material';
import { Grid, Box, Paper, useMediaQuery, useTheme } from '@mui/material';
import { green } from '@mui/material/colors';
import React from 'react';

const SearchSection = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	const small = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<>
			<Box
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '20px',
					marginLeft: '10px',
				}}>
				<Grid container>
					<Grid item lg={3}>
						<Box style={{ display: 'flex' }}>
							<Box style={{ color: 'grey' }}>
								<i class='fa-solid fa-magnifying-glass'></i>
							</Box>
							<Box ml={1}>
								<input
									style={{
										fontSize: matches ? '15px' : '20px',
										border: 'none',
										outline: 'none',
									}}
									type='text'
									placeholder='Search Transaction'
								/>
							</Box>
						</Box>
					</Grid>
					<Grid item lg={9} md={12}>
						<Box
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
								marginTop: matches ? '10px' : '0px',
							}}>
							<Box
								style={{
									display: 'flex',
									background: '#FF8A8A',
									// padding: '10px 10px 10px 10px',
									padding: matches ? '5px' : '10px',
									// marginLeft: matches ? '0px' : '0px',
									marginLeft: '0px',
									borderRadius: '20px',
									boxShadow: '0 0 2px',
								}}>
								<Box
									style={{
										background: '#FF0000',
										// padding: '1px 2px 2px 2px',
										paddingLeft: '5px',
										paddingRight: '5px',
										borderRadius: '15px',
										marginLeft: '0px',
										color: 'white',
										display: matches ? 'none' : '',
									}}>
									<i class='fa-solid fa-plus'></i>
								</Box>
								<Box
									ml={1}
									style={{
										color: '#D10000',
										fontWeight: matches ? '' : '500',

										textAlign: 'center',
										marginLeft: '0px',
										fontSize: small ? '12px' : '15px',
									}}>
									Add Sale
								</Box>
							</Box>
							<Box
								ml={1}
								style={{
									display: 'flex',
									background: '#8A8AFF',
									// padding: '10px 10px 10px 10px',
									padding: matches ? '5px' : '10px',
									// marginLeft: '0px',
									borderRadius: '20px',
									boxShadow: '0 0 2px',
								}}>
								<Box
									style={{
										background: '#2E2EFF',
										// padding: '1px 2px 2px 2px',
										paddingLeft: '5px',
										paddingRight: '5px',
										borderRadius: '15px',
										marginLeft: '0px',
										color: 'white',
										display: matches ? 'none' : '',
									}}>
									<i class='fa-solid fa-plus'></i>
								</Box>
								<Box
									ml={1}
									style={{
										color: '#0000FF',
										fontWeight: matches ? '' : '500',
										textAlign: 'center',
										marginLeft: '0px',
										fontSize: small ? '12px' : '15px',
									}}>
									Add Purchase
								</Box>
							</Box>
							<Box
								ml={1}
								style={{
									display: 'flex',
									background: 'white',
									// padding: '10px 10px 10px 10px',
									padding: matches ? '5px' : '10px',

									borderRadius: '20px',
									boxShadow: '0 0 2px',
								}}>
								<Box
									style={{
										background: '#2E2EFF',
										// padding: '1px 2px 2px 2px',
										paddingLeft: '5px',
										paddingRight: '5px',
										borderRadius: '15px',
										color: 'white',
										marginLeft: '0px',
										display: matches ? 'none' : '',
									}}>
									<i class='fa-solid fa-plus'></i>
								</Box>
								<Box
									ml={1}
									style={{
										color: '#0000FF',
										fontWeight: matches ? '' : '500',
										textAlign: 'center',
										marginLeft: '0px',
										fontSize: small ? '12px' : '15px',
									}}>
									Add More
								</Box>
							</Box>
							<Box
								ml={2}
								style={{
									fontSize: small ? '15px' : '20px',
									fontWeight: 'bold',
									color: 'grey',
								}}>
								| &nbsp;
								<span>
									<i class='fa-brands fa-whatsapp'></i>
								</span>
								<span>
									&nbsp; &nbsp;<i class='fa-solid fa-gear'></i>
								</span>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box
				style={{
					background: 'white',
					display: 'flex',
					justifyContent: 'center',
					fontWeight: '500',
					fontSize: '20px',
					padding: '12px',
					boxShadow: '0 0 5px grey',
					color: '#87CEEB',
				}}>
				<Box>NAME</Box>
			</Box>
			<Box>
				<Grid container>
					<Grid item lg={3} md={12} sm={12} xs={12}>
						<Box
							mt={1}
							mr={1}
							style={{
								boxShadow: '0 0 5px',
								padding: '5px',
								height: '70vh',
							}}>
							{/* import party  */}
							<Box
								style={{
									padding: '15px',
									boxShadow: '0 0 2px',
									margin: '5px',
									display: 'flex',
								}}>
								<Box mt={1} mr={1}>
									<i class='fa-solid fa-book'></i>
								</Box>
								<Box ml={1}>
									<Box style={{ fontWeight: '550' }}>Import Parties</Box>
									<Box style={{ fontSize: '12px' }}>
										Use contact from your phone or gmail to create parties{' '}
									</Box>
								</Box>
								<Box mt={2}>
									<i class='fa-solid fa-chevron-right'></i>
								</Box>
							</Box>
							{/* Add part  */}
							<Box
								mt={5}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
								}}>
								<Box
									ml={1}
									style={{
										background: 'grey',
										padding: '5px',
										borderRadius: '15px',
									}}>
									<i class='fa-solid fa-magnifying-glass'></i>
								</Box>
								<Box
									style={{
										display: 'flex',
										background: '#FFB52E',
										padding: '5px',
										borderRadius: '10px',
										fontWeight: '500',
										color: 'white',
									}}>
									<Box>
										<i class='fa-solid fa-plus'></i>
									</Box>
									<Box ml={1}>Add to cart</Box>
									<Box ml={1}>
										<i class='fa-sharp fa-solid fa-chevron-down'></i>
									</Box>
								</Box>
							</Box>
							{/* party  */}
							<Box
								// ml={1}
								mt={3}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									fontWeight: 'bold',
									color: 'gray',
									fontSize: '13px',
								}}>
								<Box>
									<span>
										<i class='fa-solid fa-arrow-up'></i>
									</span>
									<span> &nbsp;PARTY</span>
								</Box>
								<Box style={{ color: 'red' }}>
									<i class='fa-solid fa-filter'></i>
								</Box>
								<Box>AMOUNT</Box>
							</Box>
							{/* party list  */}
							<Box
								style={{
									display: 'flex',
									fontWeight: 'bold',
									color: 'gray',
									fontSize: '13px',
									justifyContent: 'space-between',
									padding: '10px',
									background: '#87CEEB',
								}}>
								<Box>KSP sanhula</Box>
								<Box>
									<span>2543:00</span>
									<span style={{ marginLeft: '5px' }}>
										<i class='fa-solid fa-ellipsis-vertical'></i>
									</span>
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid item lg={9} md={12} sm={12} xs={12}>
						<Box
							mt={1}
							style={{
								boxShadow: '0 0 5px',
								padding: '15px',

								color: 'gray',
								// display: 'flex',
							}}>
							<Box
								style={{
									display: 'flex',
									justifyContent: 'space-between',

									fontSize: '20px',
								}}>
								<Box style={{ fontSize: '18px', color: 'black' }}>
									KSP sanhula
								</Box>
								<Box style={{ display: 'flex' }}>
									<Box>
										<i
											style={{ color: 'organe' }}
											class='fa-solid fa-envelope'></i>
									</Box>
									<Box ml={2}>
										<i
											style={{ color: 'green' }}
											class='fa-brands fa-whatsapp'></i>
									</Box>
									<Box ml={2}>
										<i class='fa-solid fa-clock'></i>
									</Box>
								</Box>
							</Box>
							<Box
								mt={4}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									fontWeight: 'bold',
								}}>
								<Box>Phone: 912354536</Box>
								<Box>Address: sanhula</Box>
							</Box>
							<Box
								mt={3}
								style={{
									fontWeight: 'bold',
									display: 'flex',
									color: '#87CEEB',
									display: 'flex',
									justifyContent: 'space-between',
								}}>
								<Box>
									<span style={{ color: 'gray' }}>Email &nbsp;</span>
									<span>
										<i class='fa-solid fa-envelope'></i>
									</span>
									<span> &nbsp;Add Email Id</span>
								</Box>
								<Box>
									<span style={{ color: 'gray' }}>GSTin &nbsp;</span>
									<span>
										<i class='fa-sharp fa-solid fa-newspaper'></i>
									</span>
									<span> &nbsp;Add GSTIN</span>
								</Box>
							</Box>
							<Box
								mt={3}
								style={{
									fontWeight: 'bold',
									display: 'flex',
									color: '#87CEEB',
								}}>
								<span style={{ color: 'gray' }}>
									No Creadit Limit Set &nbsp;
								</span>
								<span>
									<i class='fa-solid fa-indian-rupee-sign'></i>
								</span>
								<span> &nbsp;Set Credit Limit</span>
							</Box>
						</Box>
						{/* Transaction  */}
						<Box
							mt={1}
							style={{
								boxShadow: '0 0 5px',
								padding: '15px',
								fontWeight: 'bold',
								color: 'gray',
								// display: 'flex',
							}}>
							{' '}
							<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
								<Box style={{ color: 'black' }}>TRANSACTION</Box>
								<Box style={{ border: '1px solid grey', padding: '5px' }}>
									<span>
										<i class='fa-solid fa-magnifying-glass'></i>
									</span>
									<span>
										<input
											style={{ border: 'none', outline: 'none' }}
											type='text'
										/>
									</span>
								</Box>
							</Box>
							<Box
								ml={3}
								mr={2}
								mt={2}
								style={{
									fontSize: '15px',
									fontWeight: 'bold',
									display: 'flex',
									justifyContent: 'space-between',
									color: 'gray',
									height: '32vh',
									// padding: '20px',
								}}>
								{/* <Box></Box> */}
								<Box
									style={{ display: 'flex', justifyContent: 'space-between' }}>
									<Box>
										<Box>Type</Box>
										<Box mt={2}>
											<span style={{ fontSize: '10px', color: 'green' }}>
												<i class='fa-solid fa-circle-dot'></i> &nbsp;
											</span>
											Sale
										</Box>
										<Box mt={2}>
											<span style={{ fontSize: '10px', color: 'green' }}>
												<i class='fa-solid fa-circle-dot'></i> &nbsp;
											</span>
											Sale
										</Box>
									</Box>
									<Box ml={5} style={{ display: matches ? 'none' : '' }}>
										<i class='fa-solid fa-filter'></i>
									</Box>
								</Box>
								<Box
									style={{ display: 'flex', justifyContent: 'space-between' }}>
									<Box>
										<Box>Number</Box>
										<Box mt={2}>1</Box>
										<Box mt={2}>2</Box>
									</Box>
									<Box ml={5} style={{ display: matches ? 'none' : '' }}>
										<i class='fa-solid fa-filter'></i>
									</Box>
								</Box>
								<Box
									style={{ display: 'flex', justifyContent: 'space-between' }}>
									<Box>
										<Box>
											<i class='fa-solid fa-arrow-down'></i> &nbsp;Date
										</Box>
										<Box mt={2}>30/02/23</Box>
										<Box mt={2}>30/02/23</Box>
									</Box>
									<Box ml={5} style={{ display: matches ? 'none' : '' }}>
										<i class='fa-solid fa-filter'></i>
									</Box>
								</Box>
								<Box
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										// border: '1px solid grey',
									}}>
									<Box>
										<Box>Total</Box>
										<Box mt={2}>2,345:00</Box>
										<Box mt={2}>1,846:00</Box>
									</Box>
									<Box ml={5} style={{ display: matches ? 'none' : '' }}>
										<i class='fa-solid fa-filter'></i>
									</Box>
								</Box>
								<Box
									style={{ display: 'flex', justifyContent: 'space-between' }}>
									<Box>
										<Box>Balance</Box>
										<Box mt={2}>2,345:00</Box>
										<Box mt={2}>1,846:00</Box>
									</Box>
									<Box ml={5} style={{ display: matches ? 'none' : '' }}>
										<i class='fa-solid fa-filter'></i>
									</Box>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default SearchSection;
