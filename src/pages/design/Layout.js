import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, H3, Text } from 'styled-system-html';
import Section from '../../components/Section';
import Heading from '../../components/Heading';
import Para from '../../components/Para';
import Link from '../../components/Link';
import CodeSpecimen from '../../components/CodeSpecimen';

const scope = { Flex, Box };

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Section>
	    			<Heading>Grid</Heading>
	    			<Para><Link>Grid Styled</Link> is a responsive React grid system built with styled-components.</Para>
	    			<Flex bg="white" wrap="wrap" align="center" mb={4}>
						<Box w={[1,1/2,1/3,1/4]} py={4} borderWidth="1px" borderColor="#EEE">Box</Box>
						<Box w={[1,1/2,1/3,1/4]} py={4} borderWidth="1px" borderColor="#EEE">Box</Box>
						<Box w={[1,1/2,1/3,1/4]} py={4} borderWidth="1px" borderColor="#EEE">Box</Box>
						<Box w={[1,1/2,1/3,1/4]} py={4} borderWidth="1px" borderColor="#EEE">Box</Box>
						<Box w={[1,1/2,1/3,1/4]} py={4} borderWidth="1px" borderColor="#EEE">Box</Box>
						<Box w={[1,1/2,1/3,1/4]} py={4} borderWidth="1px" borderColor="#EEE">Box</Box>
						<Box w={[1,1/2,1/3,1/4]} py={4} borderWidth="1px" borderColor="#EEE">Box</Box>
						<Box w={[1,1/2,1/3,1/4]} py={4} borderWidth="1px" borderColor="#EEE">Box</Box>
						<Box w={[1,1/2,1/3,1/4]} py={4} borderWidth="1px" borderColor="#EEE">Box</Box>
						<Box w={[1,1/2,1/3,1/4]} py={4} borderWidth="1px" borderColor="#EEE">Box</Box>
						<Box w={[1,1/2,1/3,1/4]} py={4} borderWidth="1px" borderColor="#EEE">Box</Box>
						<Box w={[1,1/2,1/3,1/4]} py={4} borderWidth="1px" borderColor="#EEE">Box</Box>
					</Flex>
				</Section>

				<Section>
	    			<Heading>Spacing Scale</Heading>
					{
						Object.keys(props.theme.space).map(
							(space) => { 
								if (parseInt(space) !== 0) {
									return <Box bg="white" display="inline-block" mx={1} borderWidth="1px" borderColor="#eee" p={parseInt(space)}>
										<Text>{space}</Text>
									</Box>
								}
							}
						)
					}
				</Section>
    		</Box>
    	</Box>
	</ThemeProvider>
)