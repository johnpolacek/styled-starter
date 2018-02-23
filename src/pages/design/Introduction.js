import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Box, Text } from 'styled-system-html';
import Link from '../../components/Link'

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Text f={3}>Welcome to the living style guide for your digital product. It is here you can write design documentation for color, typography and UI with live components from your codebase.</Text>
				<Text fontStyle="italic" py={4}>Note: All <Link href="#/cards">component code samples</Link> within the style guide are editable -- thanks <Link href="https://github.com/FormidableLabs/react-live">React Live</Link>.</Text>
			</Box>
		</Box>
	</ThemeProvider>
)
