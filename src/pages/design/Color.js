import React, { Component } from 'react';
import { Flex, Box, H3, Text } from 'styled-system-html';
import {Page, ReactSpecimen, ColorPaletteSpecimen} from 'catalog';

export default (props) => (
	<Box py={5} px={3}>
		<Box py={5}>
    		<Box p={2}>
    			<H3 py={2}>Color Palette</H3>
				<Flex wrap="wrap">{
					Object.keys(props.theme.colors).map(
						(color) => { 
							if (color != 'white' && color != 'black') {
								return <Box py={color == 'base' ? 3 : 2} px={2} w={/\d/.test(color) ? .1 : 1} bg={props.theme.colors[color]}>
									<Text color={parseInt(props.theme.colors[color].slice(1),16) > 9999999 ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.5)'} f={color == 'base' ? 2 : 1}>{color}</Text>
									<Text color={parseInt(props.theme.colors[color].slice(1),16) > 9999999 ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.5)'} f={0}>{props.theme.colors[color]}</Text>
								</Box>
							}
						})
					}
				</Flex>
    		</Box>
    	</Box>
	</Box>
)