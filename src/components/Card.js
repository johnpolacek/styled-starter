import React, { Component } from 'react';
import { Flex, Box, H1, H2, H3, H4, H5, H6, Text, UL, LI, Image } from 'styled-system-html';

export default (props) => (
	<Box bg={props.bg || 'white'} overflow="hidden" borderRadius="8px" borderColor="rgba(0,0,0,.1)" borderWidth="1px">
		{
			props.imageSrc &&
			<Image style={{display:'block'}} m={0} w={1} src={props.imageSrc} alt={props.imageAlt} />
		}
		
		<Box p={3}>
			{
				props.title &&
				<H3 color={props.color || 'base'} pb={2}>{props.title}</H3>
			}
			{props.children}
		</Box>
	</Box>
)