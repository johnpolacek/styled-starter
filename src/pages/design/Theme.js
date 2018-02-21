import connect from 'refunk';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, H4, Text } from 'styled-system-html';
import Heading from '../../components/Heading';
import Link from '../../components/Link';
import CodeBlock from '../../components/CodeBlock'
import FontSelectBrowser from '../../components/FontSelectBrowser'


const Theme = (props) => (
	<ThemeProvider theme={props.theme}>
		<Flex p={4} mx={1}>
			<Box w={1/2}>
				<Heading>Edit Theme</Heading>
				<H4 py={2}>Choose a font</H4>
				<FontSelectBrowser setFont={props.setFont} />
			</Box>
			<Box w={1/2}>
				<Heading>Theme Data</Heading>
				{
					props.theme &&
					<Box my={2} bg="white">
						<CodeBlock>{JSON.stringify(props.theme, null, 2)}</CodeBlock>
					</Box>
				}
			</Box>
		</Flex>
	</ThemeProvider>
)

export default connect(Theme);
