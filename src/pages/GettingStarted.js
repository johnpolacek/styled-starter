import React, { Component } from 'react';
import { Box, Text } from 'styled-system-html';
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'


class GettingStarted extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Box>
				<SiteHeader />
				<Box p={[4,5]} mw="1200px" mx="auto">
					<Text>Getting Started content will go here...</Text>
				</Box>
				<SiteFooter />
			</Box>
		);
	}
}

export default GettingStarted;
