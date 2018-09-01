import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import { Flex, Box } from 'grid-styled'
import { Div, Text } from 'styled-system-html'
import theme from '../_Theme'

export default (props) => (
	<LiveProvider mountStylesheet={false} code={props.code} scope={props.scope}>
		<Flex flexWrap="wrap">
			<Box width={[1,1,1, props.w || 1/2]} >
				<Div position="relative" border="1px solid" borderColor="gray2" bg="white" css={{overflow:'scroll'}}>
					<Text fontSize="0" position="absolute" top="0" right="0" m={0} px={2} bg="base" color="white" opacity=".4">edit me</Text>
					<LiveEditor style={{fontFamily: theme.monospace, padding: '24px', margin:0, height: '100%', fontSize: props.f || '16px', color:'#222'}} />
				</Div>
			</Box>
			<Box width={[1,1,1, props.w ? 1-props.w : 1/2]} pt={2} pl={[0,0,0,4]}>
				<LiveError />
				<LivePreview />
			</Box>
		</Flex>
	</LiveProvider>
)