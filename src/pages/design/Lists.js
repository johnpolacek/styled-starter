import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, UL, OL, LI } from 'styled-system-html';
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import CodeSpecimen from '../../components/CodeSpecimen'

const scope = { UL, OL, LI };

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Section>
	    			<Heading>Unordered List</Heading>
	    			<CodeSpecimen code={`<UL>
	<LI>List Item 1</LI>
	<LI>List Item 2</LI>
	<LI>List Item 3</LI>
</UL>`} scope={scope} />
	    		</Section>
	    		<Section>
	    			<Heading>Ordered List</Heading>
	    			<CodeSpecimen code={`<OL>
	<LI>List Item 1</LI>
	<LI>List Item 2</LI>
	<LI>List Item 3</LI>
</OL>`} scope={scope} />
	    		</Section>
			</Box>
		</Box>
	</ThemeProvider>
)