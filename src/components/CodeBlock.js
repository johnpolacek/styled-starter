import React, { Component } from 'react';
import { Box, Pre, Code } from 'styled-system-html';

export default (props) => (
	<Box w={props.w || 'auto'} px={3} pb={1} mb={3} bg="rgba(0,0,0,.01)" borderWidth="1px" borderColor="rgba(0,0,0,.025)">
		<Pre><Code>{props.children}</Code></Pre>
	</Box>
)