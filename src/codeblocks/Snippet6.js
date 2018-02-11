import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { ghcolors } from 'react-syntax-highlighter/styles/prism';
import { Box } from 'styled-system-html';


const codeString = `<Blockquote author="Grandpa Polacek">Son, you have the eyes of an eagle... a dead one.</Blockquote>`;

export default () => (
	<Box mb={4}>
		<SyntaxHighlighter language='javascript' style={ghcolors}>{codeString}</SyntaxHighlighter>
	</Box>
)