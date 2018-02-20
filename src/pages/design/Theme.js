import { ThemeProvider } from 'styled-components';
import { Box, Text } from 'styled-system-html';
import Heading from '../../components/Heading';
import Link from '../../components/Link';
import CodeBlock from '../../components/CodeBlock'

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Heading>Theme JSON</Heading>
				{
					props.theme &&
					<Box my={2} bg="white">
						<CodeBlock>{JSON.stringify(props.theme, null, 2)}</CodeBlock>
					</Box>
				}
			</Box>
		</Box>
	</ThemeProvider>
)
