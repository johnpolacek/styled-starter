import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { ghcolors } from 'react-syntax-highlighter/styles/prism';
import { Box } from 'styled-system-html';


const codeString = `module.exports = {
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

export default () => (
	<Box mb={4}>
		<SyntaxHighlighter language='javascript' style={ghcolors}>{codeString}</SyntaxHighlighter>
	</Box>
)