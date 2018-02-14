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
	    			<Heading>Font</Heading>
	    			<Text f={0} color="gray">{props.theme.font}</Text>
	    			<Text pt={3} f={5}>The quick brown fox jumps over the lazy dog.</Text>
	    			<Flex wrap="wrap" pt={2}>
						{[100,200,300,400,500,600,700,800,900].map((weight) => {
							return(
								<Box bg="white" key={weight} mr={1} mb={1} borderWidth="1px" borderColor="#eee">
									<Text style={{fontWeight:weight}} py={1} px={3} f={4}>Aa</Text>
									<Box pt={1} pb={2} px={3} borderWidth="1px" borderTop borderColor="#eee">
										<Text f={0} color='gray'>{weight}</Text>
									</Box>
								</Box>
							)
						})}
					</Flex>
					<Flex>
						<Box bg="white" mr={1} mb={1} borderWidth="1px" borderColor="#eee">
							<Text py={1} px={3} f={4}>Aa</Text>
							<Box pt={1} pb={2} px={3} borderWidth="1px" borderTop borderColor="#eee">
								<Text f={0} color='gray'>Reg</Text>
							</Box>
						</Box>
						<Box bg="white" mr={1} mb={1} borderWidth="1px" borderColor="#eee">
							<Text py={1} px={3} bold f={4}>Aa</Text>
							<Box pt={1} pb={2} px={3} borderWidth="1px" borderTop borderColor="#eee">
								<Text f={0} color='gray'>Bold</Text>
							</Box>
						</Box>
						<Box bg="white" mr={1} mb={1} borderWidth="1px" borderColor="#eee">
							<Text py={1} px={3} f={4}><em>Aa</em></Text>
							<Box pt={1} pb={2} px={3} borderWidth="1px" borderTop borderColor="#eee">
								<Text f={0} color='gray'>Italic</Text>
							</Box>
						</Box>
					</Flex>
	    		</Section>
			</Box>
		</Box>
	</ThemeProvider>
)