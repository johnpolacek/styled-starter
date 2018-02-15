import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, UL, LI } from 'styled-system-html';
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Para from '../../components/Para'
import Link from '../../components/Link'
import CodeSpecimen from '../../components/CodeSpecimen'

const scope = { Para, UL, LI, Link };

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Section>
	    			<Heading>Paragraph</Heading>
					<CodeSpecimen f="15px" code={`<Para>
	Bring to the table win-win survival 
	strategies to ensure clickthroughs. 
	At the end of the day, going forward, 
	a new normal that has evolved is 
	on the runway heading towards a 
	streamlined cloud solution. 
	This filler copy was generated with 
	<Link href="http://www.cipsum.com/">
		Corporate Ipsum
	</Link>
</Para>`} scope={scope} />
	    		</Section>
			</Box>
		</Box>
	</ThemeProvider>
)