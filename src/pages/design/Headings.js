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
	    			<Heading>Headings</Heading>
	    			<CodeSpecimen code={`<H1 f={6}>Heading 1</H1>`} scope={scope} />
					<CodeSpecimen code={`<H2 f={5}>Heading 2</H2>`} scope={scope} />
					<CodeSpecimen code={`<H3 f={4}>Heading 3</H3>`} scope={scope} />
					<CodeSpecimen code={`<H4 f={3}>Heading 4</H4>`} scope={scope} />
					<CodeSpecimen code={`<H5 f={2}>Heading 5</H5>`} scope={scope} />
					<CodeSpecimen code={`<H6 f={1}>Heading 6</H6>`} scope={scope} />
	    		</Section>
			</Box>
		</Box>
	</ThemeProvider>
)