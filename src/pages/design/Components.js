import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, H1, H2, H3, H4, H5, H6, Text, UL, LI, Image, Button } from 'styled-system-html';
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Para from '../../components/Para'
import Link from '../../components/Link'
import CodeSpecimen from '../../components/CodeSpecimen'

const scope = { Flex, Box, H1, H2, H3, H4, H5, H6, Text, UL, LI, Image, Button };

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Section>
					<Para>Use <Link href="http://jxnblk.com/styled-system/">Styled System</Link> primitives as building blocks for your own React Components or from an existing library.</Para>
					<UL>
						<LI><Link href="http://jxnblk.com/rebass/">Rebass</Link></LI>
						<LI><Link href="https://github.com/jxnblk/grid-styled">Grid Styled</Link></LI>
						<LI><Link href="https://github.com/jxnblk/system-components">System Components</Link></LI>
						<LI><Link href="https://johnpolacek.github.io/styled-system-html/">Styled System HTML</Link></LI>
						<LI><Link href="https://github.com/jxnblk/macro-components">Macro Components</Link></LI>
					</UL>
				</Section>
				<Section>
					<Para>Some examples of components have been included in this demo. <Link f={1} fontStyle='italic' href="https://github.com/johnpolacek/styled-starter/tree/master/src/components">view source</Link></Para>
				</Section>
    		</Box>
    	</Box>
	</ThemeProvider>
)