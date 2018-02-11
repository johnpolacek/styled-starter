import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { ghcolors } from 'react-syntax-highlighter/styles/prism';
import { Box } from 'styled-system-html';


const codeString = `<Blockquote 
    bg="gray0" color="base" 
    px={4} py={3} mb={4} 
    borderLeft borderWidth={4} borderColor="gray2"
    f={4} fontStyle="italic">
    Son, you have the eyes of an eagle... a dead one.
    <Footer mt={2} align="right" pr={5} f={1} 
    color="gray">– Grandpa Polacek</Footer>
</Blockquote>`;

export default () => (
	<Box mb={4}>
		<SyntaxHighlighter language='javascript' style={ghcolors}>{codeString}</SyntaxHighlighter>
	</Box>
)