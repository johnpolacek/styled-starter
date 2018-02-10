import React, { Component } from 'react';
import { Box, Text, H3, A } from 'styled-system-html';
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import CodeBlock from '../components/CodeBlock'


class Index extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Box>
				<SiteHeader />
				<Box p={[4,5]} mw="1000px" mx="auto">
					<H3 pb={2}>Getting started</H3>
					<Text pb={2}>First, <A href="https://github.com/johnpolacek/styled-starter-basic/archive/master.zip">download</A> the <A href="https://github.com/johnpolacek/styled-starter-basic/">basic starter kit</A>, then install from within the project directory.</Text>
					<CodeBlock w="150px">npm install</CodeBlock>
					<Text fontStyle="italic" py={5} color="gray">More info coming soon...</Text>
				</Box>
				<SiteFooter />
			</Box>
		);
	}
}

export default Index;
