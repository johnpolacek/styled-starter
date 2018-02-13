import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Box, Span } from 'styled-system-html';
import Para from '../../components/Para'
import Link from '../../components/Link'

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Para><Span f={3}>Welcome to the living style guide for your digital product. It is here you can write design documentation for color, typography, layout structure and UI with live components from your codebase.</Span></Para>
				<Para><Span f={1} fontStyle="italic" color="gray">Built with <Link href="https://www.catalog.style/">Catalog</Link>.</Span></Para>
			</Box>
		</Box>
	</ThemeProvider>
)
