import React, { Component } from 'react';
import { Box, Span } from 'styled-system-html';
import Para from '../../components/Para'
import Link from '../../components/Link'

export default () => (
	<Box py={5} px={3}>
		<Box py={5}>
			<Box pt={3} px={2} mw="960px">
				<Para><Span f={3}>Welcome to the living style guide for your digital product. It is here you can write design documentation for your typography, colors and UI with real, live components from your codebase.</Span></Para>
				<Para><Span f={1} fontStyle="italic" color="gray">Built with <Link href="https://www.catalog.style/">Catalog</Link>.</Span></Para>
			</Box>
		</Box>
	</Box>
)
