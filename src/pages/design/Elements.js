import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, Section, H1, H2, H3, H4, H5, H6, Text } from 'styled-system-html';
import {CodeSpecimen} from 'catalog';

const headingSpecimen = `<H1 f={6}>Heading 1</H1>
<H2 f={5}>Heading 2</H2>
<H3 f={4}>Heading 3</H3>
<H4 f={3}>Heading 4</H4>
<H5 f={2}>Heading 5</H5>
<H6 f={1}>Heading 6</H6>`;

const textSpecimen = `<Text>A text element</Text>`;

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
    			<Text pt={2} pb={4}>Use Styled System primitives as building blocks for your React Components.</Text>
    			
    		</Box>
    	</Box>
	</ThemeProvider>
)