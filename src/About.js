import React, { Component } from 'react';
import { Box, Text } from 'styled-system-html';
import SiteNav from './components/SiteNav'
import SiteHeader from './components/SiteHeader'


class About extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Box>
				<SiteNav current="About" />
				<SiteHeader />
				<Box p={5} mw="1200px" mx="auto">
					<Text>About content will go here...</Text>
				</Box>
			</Box>
		);
	}
}

export default About;
