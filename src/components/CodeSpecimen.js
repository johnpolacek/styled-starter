import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import { Flex, Box } from 'styled-system-html';

export default (props) => (
	<LiveProvider mountStylesheet={false} code={props.code} scope={props.scope}>
		<Flex wrap="wrap">
			<Box w={[1,1,1,1/2]} overflow="hidden" pr={2}>
				<LiveEditor style={{padding: '24px', margin:0, height: '100%', fontSize: '16px', color:'#222',background:'#fff'}} />
			</Box>
			<Box w={[1,1,1,1/2]} pl={4}>
				<LiveError />
				<LivePreview />
			</Box>
		</Flex>
	</LiveProvider>
)