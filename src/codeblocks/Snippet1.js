import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { ghcolors } from 'react-syntax-highlighter/styles/prism';
import { Box } from 'styled-system-html';


const codeString = `import React, { Component } from 'react';
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

export default NewPage;`;

export default () => (
	<Box mb={4}>
		<SyntaxHighlighter language='javascript' style={ghcolors}>{codeString}</SyntaxHighlighter>
	</Box>
)