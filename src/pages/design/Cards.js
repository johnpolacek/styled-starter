import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, H1, H2, H3, H4, H5, H6, Text, UL, LI, Image, Button } from 'styled-system-html';
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Link from '../../components/Link'
import CodeSpecimen from '../../components/CodeSpecimen'

const scope = { Flex, Box, H1, H2, H3, H4, H5, H6, Text, UL, LI, Image, Button };

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Section>
					<Section>
						<Heading>Cards</Heading>
						<Box w={1/4} bg="white" overflow="hidden" borderRadius="8px" borderColor="rgba(0,0,0,.1)" borderWidth="1px">
							<Image style={{display:'block'}} m={0} w={1} src="https://unsplash.it/g/270/270" alt="A placeholder image from Unsplash" />
							<Box p={3}>
								<H3 color="base" pb={2}>Title</H3>
								<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
							</Box>
						</Box>
					</Section>
				</Section>
    		</Box>
    	</Box>
	</ThemeProvider>
)