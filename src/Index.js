import React, { Component } from 'react';
import { Box, Text } from 'styled-system-html';
import SiteNav from './components/SiteNav'
import SiteHeader from './components/SiteHeader'


class Index extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Box>
				<SiteNav current="Index" />
				<SiteHeader />
				<Box p={[4,5]} mw="1200px" mx="auto">
					<Text>Index content will go here...</Text>
				</Box>
			</Box>
		);
	}
}

export default Index;
