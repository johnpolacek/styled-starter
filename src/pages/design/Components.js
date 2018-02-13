import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, Section, H1, H2, H3, H4, H5, H6, Text } from 'styled-system-html';
import Link from '../../components/Link'
import {CodeSpecimen} from 'catalog';
import * as snippets from '../../snippets'

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Text pt={2} pb={4}>Use <Link href="https://johnpolacek.github.io/styled-system-html/">Styled System primitives</Link> as building blocks for your React Components.</Text>
    		</Box>
    	</Box>
	</ThemeProvider>
)