import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { ghcolors } from 'react-syntax-highlighter/styles/prism';
import { Box } from 'styled-system-html';


const codeString = `import React, { Component } from 'react';
import { Blockquote, Footer } from 'styled-system-html';

export default (props) => (
    <Blockquote 
        bg="gray0" color="base" 
        px={4} py={3} mb={4} 
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

export default () => (
	<Box mb={4}>
		<SyntaxHighlighter language='javascript' style={ghcolors}>{codeString}</SyntaxHighlighter>
	</Box>
)