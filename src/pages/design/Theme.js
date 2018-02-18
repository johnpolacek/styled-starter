import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Box, Text } from 'styled-system-html';
import Heading from '../../components/Heading';
import Link from '../../components/Link';
import { LiveProvider, LiveEditor } from 'react-live'

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Heading>Theme Editor</Heading>
				<Text>Edit the JSON below to change theme settings.</Text>
				{
					props.theme &&
					<Box my={2} bg="white">
						<LiveProvider mountStylesheet={false} code={JSON.stringify(props.theme, null, 2)}>
							<LiveEditor style={{fontFamily: props.theme.monospace, padding: '24px', margin:0, height: '100%', fontSize: '14px', color:'#222'}} />
						</LiveProvider>
					</Box>
				}
			</Box>
		</Box>
	</ThemeProvider>
)
