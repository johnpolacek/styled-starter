import React, { Component } from 'react';
import { Flex, Box, Text, Code, UL, LI, Blockquote, Footer } from 'styled-system-html';
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Section from '../components/Section'
import Heading from '../components/Heading'
import Para from '../components/Para'
import BQ from '../components/Blockquote'
import Link from '../components/Link'
import CodeBlock from '../components/CodeBlock'
import Snippet1 from '../codeblocks/Snippet1'
import Snippet2 from '../codeblocks/Snippet2'
import Snippet3 from '../codeblocks/Snippet3'
import Snippet4 from '../codeblocks/Snippet4'
import Snippet5 from '../codeblocks/Snippet5'
import Snippet6 from '../codeblocks/Snippet6'


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
						<CodeBlock w="144px">npm install</CodeBlock>
						<Para>Get a dev environment up and running.</Para>
						<CodeBlock w="144px">npm run dev</CodeBlock>
					</Section>

					<Section>
						<Heading>Pages and Routing</Heading>
						<Para>By default, the starter project has two pages: an <Link href="https://johnpolacek.github.io/styled-starter-basic/">index page</Link> and an <Link href="https://johnpolacek.github.io/styled-starter-basic/">about page</Link>.</Para>
						<Para>To add a new page, go to src/pages and duplicate <Link href="https://github.com/johnpolacek/styled-starter-basic/blob/master/src/pages/About.js">About.js</Link> then change its name and edit it.</Para>
						<Snippet1 />
						<Para>Next, go to the <Link href="https://github.com/johnpolacek/styled-starter-basic/tree/master/pages">top level pages directory</Link> and create a new page.</Para>
						<Snippet2 />
						<Para>Last, we need to tell <Code f={2} px={1}>next.config.js</Code> about our new route.</Para>
						<Snippet3 />
					</Section>

					<Section>
						<Heading>Components and Content</Heading>
						<Para>Compose UI elements with <Link href="https://johnpolacek.github.io/styled-system-html/">Styled System HTML</Link> (SSHTML).</Para>
						<Para>SSHTML looks a lot like regular HTML. The key difference is every SSHTML element is a <Link href="https://www.styled-components.com/">styled component</Link> that inherits style props from your design theme.</Para>
						<Para>For example, this is how one could create a blockquote:</Para>
						<Flex wrap="wrap">
							<Box w={[1,1,1/2]}>
								<Snippet4 />
							</Box>
							<Box w={[1,1,1/2]} pl={[0,0,3]} py={2}>
								<Blockquote 
									bg="gray0" color="base" 
									px={4} py={3} mb={4} 
									borderLeft borderWidth={4} borderColor="gray2"
									f={4} fontStyle="italic">
									Son, you have the eyes of an eagle... a dead one.
									<Footer mt={2} align="right" pr={5} f={1} 
									color="gray">– Grandpa Polacek</Footer>
								</Blockquote>
							</Box>
						</Flex>
						<Para>We can use SSHTML elements as primitives when creating components. For example, here is how one could create a Blockquote component.</Para>
						<Snippet5 />
						<Snippet6 />
						<BQ author="Grandpa Polacek">Son, you have the eyes of an eagle... a dead one.</BQ>
						<Para>SSHTML is built on top of <Link href="https://github.com/jxnblk/styled-system">Styled System</Link> which includes <Link href="http://jxnblk.com/grid-styled/">Grid Styled</Link> making it easy to build responsive layouts.</Para>
						<Flex w={1} wrap="wrap" color="white" pb={4}>
							<Box w={[1,1/2,1/4]} bg="gray6" py={4} px={3} align="center">
								<Code>{ `<Box w={[1,1/2,1/4]} />` } </Code>
							</Box>
							<Box w={[1,1/2,1/4]} bg="gray7" py={4} px={3} align="center">
								<Code>{ `<Box w={[1,1/2,1/4]} />` } </Code>
							</Box>
							<Box w={[1,1/2,1/4]} bg="gray8" py={4} px={3} align="center">
								<Code>{ `<Box w={[1,1/2,1/4]} />` } </Code>
							</Box>
							<Box w={[1,1/2,1/4]} bg="gray9" py={4} px={3} align="center">
								<Code>{ `<Box w={[1,1/2,1/4]} />` } </Code>
							</Box>
						</Flex>
						<Para>For more information, see these helpful links:</Para>
						<UL>
							<LI><Link href="https://johnpolacek.github.io/styled-system-html/">Styled System HTML</Link></LI>
							<LI><Link href="https://github.com/jxnblk/styled-system">Styled System</Link></LI>
							<LI><Link href="http://jxnblk.com/grid-styled/">Grid Styled</Link></LI>
							<LI><Link href="https://www.styled-components.com/">Styled Components</Link></LI>
						</UL>
					</Section>

					<Section>
						<Heading>Theming</Heading>
						<Para>To adjust colors and typography, edit the <Link href="https://github.com/johnpolacek/styled-starter-basic/blob/master/src/_Theme.js">theme file</Link> in the <Code f={2}>/src</Code> directory. Additionally, you could use the <Link href="https://johnpolacek.github.io/design-system-playground/">Design System Playground</Link> to generate JSON theme data.</Para>
					</Section>

					{
						/* 
							Testing
						*/
					}

					<Text fontStyle="italic" py={5} color="gray">More info coming soon...</Text>
				</Box>
				<SiteFooter />
			</Box>
		);
	}
}

export default Index;
