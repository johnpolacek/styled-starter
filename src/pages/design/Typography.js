import React, { Component } from 'react';
import { Flex, Box, H3, Text } from 'styled-system-html';
import Section from '../../components/Section'

export default (props) => (
	<Box py={5} px={3}>
		<Box py={5}>
    		<Box p={2}>
    			<Section>
	    			<H3 py={2}>Font</H3>
	    			<Text f={5}>The quick brown fox jumps over the lazy dog.</Text>
	    			<Flex wrap="wrap" pt={2}>
						{[100,200,300,400,500,600,700,800,900].map((weight) => {
							return(
								<Box key={weight} mr={1} mb={1} borderWidth="1px" borderColor="#eee">
									<Text style={{fontWeight:weight}} py={1} px={3} f={4}>Aa</Text>
									<Box pt={1} pb={2} px={3} borderWidth="1px" borderTop borderColor="#eee">
										<Text f={0} color='gray'>{weight}</Text>
									</Box>
								</Box>
							)
						})}
					</Flex>
					<Flex>
						<Box mr={1} mb={1} borderWidth="1px" borderColor="#eee">
							<Text py={1} px={3} f={4}>Aa</Text>
							<Box pt={1} pb={2} px={3} borderWidth="1px" borderTop borderColor="#eee">
								<Text f={0} color='gray'>Reg</Text>
							</Box>
						</Box>
						<Box mr={1} mb={1} borderWidth="1px" borderColor="#eee">
							<Text py={1} px={3} bold f={4}>Aa</Text>
							<Box pt={1} pb={2} px={3} borderWidth="1px" borderTop borderColor="#eee">
								<Text f={0} color='gray'>Bold</Text>
							</Box>
						</Box>
						<Box mr={1} mb={1} borderWidth="1px" borderColor="#eee">
							<Text py={1} px={3} f={4}><em>Aa</em></Text>
							<Box pt={1} pb={2} px={3} borderWidth="1px" borderTop borderColor="#eee">
								<Text f={0} color='gray'>Italic</Text>
							</Box>
						</Box>
					</Flex>
	    			<Text f={0} color="gray">{props.theme.font}</Text>
	    		</Section>
				
	    		<Section>
	    			<H3>Type Scale</H3>
	    			<Flex wrap="wrap">
	    				{
	    					props.theme.fontSizes.map((size) => {
	    						return (
	    							<Box key={'f'+size} w={[1/2,1/4,1/5]} style={{minHeight:'140px'}} pb={1} pr={1} align="center">
										<Box borderWidth="1px" borderColor="#eee" style={{height:'100%'}}>
											<Box borderWidth="1px" borderColor="#eee" borderBottom py={1} px={3}>
												<Text f={0} color='gray'>{size}</Text>
											</Box>
											<Flex align='center' style={{height:'75%'}}>
												<Box mx='auto'>
													<Text py={1} px={3} f={size}>Aa</Text>
												</Box>
											</Flex>
										</Box>
									</Box>
	    						)
	    					})
	    				}
	    			</Flex>
	    		</Section>

    		</Box>
    	</Box>
	</Box>
)