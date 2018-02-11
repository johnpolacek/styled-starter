import React, { Component } from 'react';
import { Box, Pre, Code } from 'styled-system-html';

export default (props) => (
	<Box w={props.w || 'auto'} px={3} py={1} mb={4} bg="rgba(0,0,0,.01)" borderWidth="1px" borderColor="rgba(0,0,0,.025)">
		<Pre><Code color="rgb(57, 58, 52)" f={2}>{props.children}</Code></Pre>
	</Box>
)