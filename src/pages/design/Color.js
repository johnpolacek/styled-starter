import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, Text } from 'styled-system-html';
import Heading from '../../components/Heading';

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
    			<Heading>Color Palette</Heading>
				<Flex wrap="wrap">{
					Object.keys(props.theme.colors).map(
						(color) => { 
							if (color != 'white' && color != 'black') {
								return <Box key={color} py={color == 'base' ? 3 : 2} px={2} w={/\d/.test(color) ? [.5,.2,.1] : 1} bg={props.theme.colors[color]}>
									<Text color={parseInt(props.theme.colors[color].slice(1),16) > 9999999 ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.5)'} f={color == 'base' ? 2 : 1}>{color}</Text>
									<Text color={parseInt(props.theme.colors[color].slice(1),16) > 9999999 ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.5)'} f={0}>{props.theme.colors[color]}</Text>
								</Box>
							}
						})
					}
				</Flex>
    		</Box>
    	</Box>
	</ThemeProvider>
)