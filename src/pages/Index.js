import React, { Component } from 'react';
import { Box, Text } from 'styled-system-html';
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Section from '../components/Section'
import Heading from '../components/Heading'
import Para from '../components/Para'
import Link from '../components/Link'
import CodeBlock from '../components/CodeBlock'
import Snippet1 from '../codeblocks/Snippet1'
import Snippet2 from '../codeblocks/Snippet2'


class Index extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Box>
				<SiteHeader />
				<Box p={[4,5]} mw="1000px" mx="auto">
					<Section>
						<Heading>Getting Started</Heading>
						<Para>First, <Link href="https://github.com/johnpolacek/styled-starter-basic/archive/master.zip">download</Link> the <Link href="https://github.com/johnpolacek/styled-starter-basic/">basic starter kit</Link>, then install from within the project directory.</Para>
						<CodeBlock w="150px">npm install</CodeBlock>
						<Para>Get a dev environment up and running.</Para>
						<CodeBlock w="150px">npm run dev</CodeBlock>
					</Section>

					<Section>
						<Heading>Pages and Routing</Heading>
						<Para>By default, the starter project has two pages: an <Link href="https://johnpolacek.github.io/styled-starter-basic/">index page</Link> and an <Link href="https://johnpolacek.github.io/styled-starter-basic/">about page</Link>.</Para>
						<Para>To add a new page, go to src/pages and duplicate <Link href="https://github.com/johnpolacek/styled-starter-basic/blob/master/src/pages/About.js">About.js</Link> then change its name and edit it.</Para>
						<Snippet1 />
						<Para>Next, go to the <Link href="https://github.com/johnpolacek/styled-starter-basic/tree/master/pages">top level pages directory</Link> and create a new page.</Para>
						<Snippet2 />
					</Section>

					<Text fontStyle="italic" py={5} color="gray">More info coming soon...</Text>
				</Box>
				<SiteFooter />
			</Box>
		);
	}
}

export default Index;
