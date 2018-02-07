import React, { Component } from 'react';
import { Box, Text } from 'styled-system-html';

class Color extends Component {
	render() {
	    return (
	    	<Box py={5} px={4}>
	    		<Box p={2}>
	    			<Text>Color content goes here</Text>
	    		</Box>
	    	</Box>
	    );
	}
}

export default Color;
