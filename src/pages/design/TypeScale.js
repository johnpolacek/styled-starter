import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, H1, H2, H3, H4, H5, H6, Text, Code, Em, Strong, Small, U, Del } from 'styled-system-html';
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Link from '../../components/Link'
import CodeSpecimen from '../../components/CodeSpecimen'

const scope = { Flex, Box, H1, H2, H3, H4, H5, H6, Text, Code, Em, Strong, Small, U, Del, Link };

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Section>
	    			<Heading>Type Scale</Heading>
	    			<Flex wrap="wrap">
	    				{
	    					props.theme.fontSizes.map((size) => {
	    						return (
	    							<Box key={'f'+size} w={[1/2,1/4,1/5]} style={{minHeight:'140px'}} pb={1} pr={1} align="center">
										<Box bg="white" borderWidth="1px" borderColor="#eee" style={{height:'100%'}}>
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
	</ThemeProvider>
)