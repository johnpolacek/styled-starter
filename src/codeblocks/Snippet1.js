import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { ghcolors } from 'react-syntax-highlighter/styles/prism';
import { Box } from 'styled-system-html';


const codeString = `// src/pages/NewPage.js

import React, { Component } from 'react';
import { Box } from 'styled-system-html';
import SiteFooter from '../components/SiteFooter'

class NewPage extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Box>
				<Box p={6} mw="1200px" mx="auto" align="center">
					{
						/* Page content will go here */ 
					}
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