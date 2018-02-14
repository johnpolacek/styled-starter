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
	    			<Heading>Text</Heading>
					<CodeSpecimen code={`<Text>A text element</Text>`} scope={scope} />
    				<CodeSpecimen code={`<Link href="#">A link</Link>`} scope={scope} />
    				<CodeSpecimen code={`<Code>// Some code</Code>`} scope={scope} />
    				<CodeSpecimen code={`<Em>Em</Em>`} scope={scope} />
					<CodeSpecimen code={`<Strong>Strong</Strong>`} scope={scope} />
					<CodeSpecimen code={`<Small>Small</Small>`} scope={scope} />
					<CodeSpecimen code={`<U>Underline</U>`} scope={scope} />
					<CodeSpecimen code={`<Del>Del</Del>`} scope={scope} />
	    		</Section>
			</Box>
		</Box>
	</ThemeProvider>
)