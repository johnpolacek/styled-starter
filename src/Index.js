import React, { Component } from 'react';
import { Header, Flex, Box, H1, H2, Button, A, Text, Span } from 'styled-system-html';
import SiteNav from './components/SiteNav'
import Link from 'next/link'


class Index extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Box>
				<SiteNav current="Index" />
				<Header align="center" p={4} bg="green" color="white">
					<H1 f={7}>
						<Span color="green4" f={6} position="relative" px={4} style={{top:'-8px'}}>&lt;</Span>
						Styled Starter
						<Span color="green4" f={6} position="relative" px={4} style={{top:'-8px'}}>/&gt;</Span>
					</H1>
					<Box mw="800px" mx="auto" pb={3}>
						<H2 f={3} p={3} color="green2">Starter Kit with React, Next.js, Styled System and Styleguidist to get projects going with a design theme, built-in styleguide and&nbsp;browser&nbsp;testing</H2>
					</Box>
				</Header>
				<Box p={5} mw="1200px" mx="auto">
					<Text>Index content will go here...</Text>
				</Box>
			</Box>
		);
	}
}

export default Index;
