import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { ghcolors } from 'react-syntax-highlighter/styles/prism';
import { Div } from 'styled-system-html';

export default (props) => (
	<Div mb={5}>
		<SyntaxHighlighter language={props.language || 'javascript'} style={ghcolors}>{props.children}</SyntaxHighlighter>
	</Div>
)