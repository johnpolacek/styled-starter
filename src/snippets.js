// ------------------------------------------------------------------------------

export const newPage1 = `// src/pages/NewPage.js

import { Box } from 'styled-system';
import SiteFooter from '../components/SiteFooter'

export default (props) => (
	<Box>
		<Box p={6} mw="1200px" mx="auto" align="center">
			{
				/* Page content will go here */ 
			}
		</Box>
		<SiteFooter />
	</Box>
)`;

// ------------------------------------------------------------------------------

export const newPage2 = `// pages/newpage.js

import NewPage from '../src/pages/NewPage'
import Page	from '../src/containers/Page'

export default () => (
	<Page name="NewPage" prefix="..">
    	<NewPage />
    </Page>
)
`;

// ------------------------------------------------------------------------------

export const nextRoute = `module.exports = {
  	exportPathMap: function () {
		return {
			'/': { page: '/' },
			'/about': { page: '/about' },
			'/newpage': { page: '/newpage' }, // <-- our new route!
			'/design': { page: '/design' }
		}
  	},
  	...
`;

// ------------------------------------------------------------------------------

export const blockquoteComponent = `import { Blockquote, Footer } from 'styled-system-html';

export default (props) => (
    <Blockquote 
        bg="gray0" color="base" 
        px={4} py={3} 
        borderLeft borderWidth={4} borderColor="gray2"
        f={4} fontStyle="italic">
        {props.children}
        {
            props.author &&
            <Footer mt={2} align="right" pr={5} f={1} color="gray">
                – {props.author}
            </Footer>
        }
    </Blockquote>
)`;

// ------------------------------------------------------------------------------

export const blockquoteUsage = `<Blockquote author="Grandpa Polacek">Son, you have the eyes of an eagle... a dead one.</Blockquote>`;

// ------------------------------------------------------------------------------

export const headings = `<H1 f={6}>Heading 1</H1>
<H2 f={5}>Heading 2</H2>
<H3 f={4}>Heading 3</H3>
<H4 f={3}>Heading 4</H4>
<H5 f={2}>Heading 5</H5>
<H6 f={1}>Heading 6</H6>`;

// ------------------------------------------------------------------------------

export const text = `<Text>A text element</Text>
<Link href="#">A link</Link>
<Code>// Some code</Code>
<Em>Em</Em>
<Strong>Strong</Strong>
<Small>Small</Small>
<U>Underline</U>
<Del>Del</Del>`;

