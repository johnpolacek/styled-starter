import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { ghcolors } from 'react-syntax-highlighter/styles/prism';
import { Box } from 'styled-system-html';


const codeString = `import NewPage from '../src/pages/NewPage'
import Page	from '../src/containers/Page'

export default () => (
	<Page name="NewPage" prefix="..">
    	<NewPage />
    </Page>
)
`;

export default () => (
	<Box mb={4}>
		<SyntaxHighlighter language='javascript' style={ghcolors}>{codeString}</SyntaxHighlighter>
	</Box>
)