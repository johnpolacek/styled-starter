import React, { Component } from 'react';
import { Box, Text, A } from 'styled-system-html';
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Section from '../components/Section'
import Heading from '../components/Heading'
import Para from '../components/Para'
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
					<Section>
						<Heading>Getting Started</Heading>
						<Para>First, <A href="https://github.com/johnpolacek/styled-starter-basic/archive/master.zip">download</A> the <A href="https://github.com/johnpolacek/styled-starter-basic/">basic starter kit</A>, then install from within the project directory.</Para>
						<CodeBlock w="150px">npm install</CodeBlock>
						<Para>Get a dev environment up and running.</Para>
						<CodeBlock w="150px">npm run dev</CodeBlock>
					</Section>

					<Section>
						<Heading>Pages and Routing</Heading>
						<Para>By default, the starter project has two pages: a <A href="https://johnpolacek.github.io/styled-starter-basic/">home/index page</A> and an <A href="https://johnpolacek.github.io/styled-starter-basic/">about page</A>.</Para>
						<Para>To add a new page, go to the src/pages directory and duplicate the <A href="https://github.com/johnpolacek/styled-starter-basic/blob/master/src/pages/NewPage.js">NewPage.js</A> file then change its name to that of the new page then edit it.</Para>
						<CodeBlock>{`import React, { Component } from 'react';
import { Box, H2, Text, A } from 'styled-system-html';
import SiteFooter from '../components/SiteFooter'

class NewPage extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Box>
				<Box p={6} mw="1200px" mx="auto" align="center">
					<H2 pt={5} pb={4}>New Page</H2>
					<Text pb={5}>This is a new page</Text>
				</Box>
				<SiteFooter />
			</Box>
		);
	}
}

export default NewPage;`}</CodeBlock>
						<Para>Next, go to the <A href="https://github.com/johnpolacek/styled-starter-basic/tree/master/pages">top level pages directory</A> and duplicate <A href="https://github.com/johnpolacek/styled-starter-basic/blob/master/pages/about.js">about.js</A> then change its name to that of the new page then edit it.</Para>
						<CodeBlock>{`import NewPage from '../src/pages/NewPage'
import Page	from '../src/containers/Page'

export default () => (
	<Page name="NewPage" prefix="..">
    	<NewPage />
    </Page>
)
`}</CodeBlock>
					</Section>

					<Text fontStyle="italic" py={5} color="gray">More info coming soon...</Text>
				</Box>
				<SiteFooter />
			</Box>
		);
	}
}

export default Index;
