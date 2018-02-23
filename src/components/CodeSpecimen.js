import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import { Flex, Box } from 'styled-system-html';
import theme from '../_Theme';

export default (props) => (
	<LiveProvider mountStylesheet={false} code={props.code} scope={props.scope}>
		<Flex pb={props.pb || 0} wrap="wrap">
			<Box bg="white" w={[1,1,1, props.w || 1/2]} overflow="scroll">
				<LiveEditor style={{fontFamily: theme.monospace, padding: '24px', margin:0, height: '100%', fontSize: props.f || '16px', color:'#222'}} />
			</Box>
			<Box w={[1,1,1, props.w ? 1-props.w : 1/2]} pt={2} pl={[0,0,0,4]}>
				<LiveError />
				<LivePreview />
			</Box>
		</Flex>
	</LiveProvider>
)