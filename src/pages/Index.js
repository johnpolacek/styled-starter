import { Flex, Box, Text, Pre, Code, UL, LI, Blockquote, Footer } from 'styled-system-html';
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Section from '../components/Section'
import Heading from '../components/Heading'
import Para from '../components/Para'
import BQ from '../components/Blockquote'
import Link from '../components/Link'
import CodeBlock from '../components/CodeBlock'
import * as snippets from '../snippets'

export default (props) => (
	<Box>
		<SiteHeader />
		<Box p={[4,5]} mw="960px" mx="auto">
			<Section>
				<Para pr={4}>Use Styled Starter to get a React project up and running quickly with Server-Side Rendering (thanks to <Link href="https://github.com/zeit/next.js">Next.js</Link>) and a built-in design system (thanks to <Link href="https://www.styled-components.com/">Styled Components</Link> with <Link href="http://jxnblk.com/styled-system/">Styled System</Link>).</Para>
			</Section>

			<Section>
				<Heading>Getting Started</Heading>
				<Para>First, <Link href="https://github.com/johnpolacek/styled-starter-basic/archive/master.zip">download</Link> the <Link href="https://github.com/johnpolacek/styled-starter-basic/">basic starter kit</Link>, then install from within the project directory.</Para>
				<Box w="144px" px={3} py={1} mb={4} bg="rgba(0,0,0,.01)" borderWidth="1px" borderColor="rgba(0,0,0,.025)">
					<Pre><Code color="rgb(57, 58, 52)" f={2}>npm install</Code></Pre>
				</Box>
				<Para>Get a dev environment up and running.</Para>
				<Box w="144px" px={3} py={1} mb={4} bg="rgba(0,0,0,.01)" borderWidth="1px" borderColor="rgba(0,0,0,.025)">
					<Pre><Code color="rgb(57, 58, 52)" f={2}>npm run dev</Code></Pre>
				</Box>
				<Para>Open up <Link href="http://localhost:3000/">localhost:3000</Link> on your browser and you should see a page that looks <Link href="https://johnpolacek.github.io/styled-starter-basic-gh-pages/">like this</Link>.</Para>
			</Section>

			<Section>
				<Heading>Pages and Routing</Heading>
				<Para>By default, the starter project has two pages: an <Link href="https://johnpolacek.github.io/styled-starter-basic-gh-pages/">index page</Link> and an <Link href="https://johnpolacek.github.io/styled-starter-basic-gh-pages/">about page</Link>.</Para>
				<Para>To add a new page, go to src/pages and duplicate <Link href="https://github.com/johnpolacek/styled-starter-basic/blob/master/src/pages/About.js">About.js</Link> then change its name and edit it.</Para>
				<CodeBlock>{snippets.newPage1}</CodeBlock>
				<Para>Next, go to the <Link href="https://github.com/johnpolacek/styled-starter-basic/tree/master/pages">top level pages directory</Link> and create a new page.</Para>
				<CodeBlock>{snippets.newPage2}</CodeBlock>
				<Para>That’s it! Well, unless your project is a Github project page. For that, you will need to set up <code>next.config.js</code> (see <Link href="https://github.com/johnpolacek/styled-starter-basic-gh-pages">this branch</Link> for more info).</Para>
			</Section>

			<Section>
				<Heading>Components and Content</Heading>
				<Para>Compose UI with <Link href="https://github.com/jxnblk/styled-system">Styled System</Link> primitives and components like <Link href="http://jxnblk.com/grid-styled/">Grid Styled</Link>, <Link href="https://johnpolacek.github.io/styled-system-html/">Styled System HTML</Link> (SSHTML).</Para>
				<Para>SSHTML looks a lot like regular HTML. The key difference is every SSHTML element is a <Link href="https://www.styled-components.com/">styled component</Link> that inherits style props from your design theme. SSHTML is built on top of <Link href="https://github.com/jxnblk/styled-system">Styled System</Link> which includes <Link href="http://jxnblk.com/grid-styled/">Grid Styled</Link> making it easy to build responsive layouts.</Para>
				<Para>We can use SSHTML elements as primitives when creating components. For example, to use a Blockquote component like this...</Para>
				<BQ author="Grandpa Polacek">Son, you have the eyes of an eagle... a dead one.</BQ>
				<CodeBlock language="xml">{snippets.blockquoteUsage}</CodeBlock>
				<Para>... you might create that component from SSHTML like this...</Para>
				<CodeBlock>{snippets.blockquoteComponent}</CodeBlock>
				<Para>There are many ways to build components with <Link href="https://github.com/jxnblk/styled-system">Styled System</Link>. More documention and examples are in the <Link href="./design">Design</Link> section of this site.</Para>
				<Para>See also:</Para>
				<UL>
					<LI><Link href="https://johnpolacek.github.io/styled-system-html/">Styled System HTML</Link></LI>
					<LI><Link href="https://github.com/jxnblk/styled-system">Styled System</Link></LI>
					<LI><Link href="http://jxnblk.com/grid-styled/">Grid Styled</Link></LI>
					<LI><Link href="https://github.com/jxnblk/macro-components">Macro Components</Link></LI>							
					<LI><Link href="https://www.styled-components.com/">Styled Components</Link></LI>
				</UL>
			</Section>

			<Section>
				<Heading>Theming</Heading>
				<Para>To adjust colors, layout and typography, edit the <Link href="https://github.com/johnpolacek/styled-starter-basic/blob/master/src/_Theme.js">theme file</Link> in the <Code f={2}>/src</Code> directory. Generate theme data by setting custom fonts or colors in the <Link href="/design#/theme">Theme section</Link>. You can also choose from a selection of sample themes by clicking <Link href="#editTheme">choose theme</Link> at the top of this page.</Para>
			</Section>

			<Section>
				<Heading>State Management</Heading>
				<Para>This demo uses <Link href="https://github.com/jxnblk/refunk">Refunk</Link> for state management. It is a simpler, smaller alternative to other state management libraries that makes use of React’s built-in component state. See <Link href="https://github.com/johnpolacek/styled-starter-with-refunk">Styled Starter with Refunk</Link>.</Para>
			</Section>

			<Section>
				<Heading>Publish and Deploy</Heading>
				<Para>The default deploy script will publish to github if you update <code>package.json</code> with your repository url.</Para>
				<Para>For more information on publishing and deploying, refer to the <Link href="https://github.com/zeit/next.js#production-deployment">Next.js documentation</Link>. To publish as a Github Page, refer to </Para>
			</Section>

			<Section>
				<Heading>Testing</Heading>
				<Para>Included is a very simple end-to-end <Link href="http://seleniumhq.github.io/selenium/docs/api/javascript/">Selenium</Link> integration test which can be run in your local environment. With the server running:</Para>
				<Box w="144px" px={3} py={1} mb={4} bg="rgba(0,0,0,.01)" borderWidth="1px" borderColor="rgba(0,0,0,.025)">
					<Pre><Code color="rgb(57, 58, 52)" f={2}>npm run test</Code></Pre>
				</Box>
				<Para>For a more detailed example, with integration with <Link href="https://travis-ci.org/">Travis CI</Link> and <Link href="https://saucelabs.com/opensauce">SauceLabs</Link>, refer to the <Link href="https://github.com/johnpolacek/styled-starter/tree/master/test">tests directory</Link> in the Styled Starter project repo. More info:</Para>
				<UL>
					<LI><Link href="http://seleniumhq.github.io/selenium/docs/api/javascript/">Selenium WebDriver JavaScript API</Link></LI>
					<LI><Link href="https://docs.travis-ci.com/user/sauce-connect/">Using Sauce Labs with Travis CI</Link></LI>
					<LI><Link href="http://samsaccone.com/posts/testing-with-travis-and-sauce-labs.html">Testing with Travis CI and Sauce Labs</Link></LI>
				</UL>
				<Para>Bring your own unit tests (BYOUT).</Para>
			</Section>

		</Box>
		<SiteFooter />
	</Box>
)
