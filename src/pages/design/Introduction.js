import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Box, Text } from 'styled-system-html';

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Text f={3}>Welcome to the living style guide for your digital product. It is here you can write design documentation for color, typography and UI with live components from your codebase.</Text>
			</Box>
		</Box>
	</ThemeProvider>
)
