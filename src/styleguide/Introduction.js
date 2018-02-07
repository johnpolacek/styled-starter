import React, { Component } from 'react';
import { Box, Text } from 'styled-system-html';

class Introduction extends Component {
	render() {
	    return (
	    	<Box py={5} px={4}>
	    		<Box p={2}>
	    			<Text>Introduction content goes here</Text>
	    		</Box>
	    	</Box>
	    );
	}
}

export default Introduction;
