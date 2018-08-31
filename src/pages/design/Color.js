import { Flex, Box } from 'grid-styled'
import { Div, H3, Text } from 'styled-system-html';

export default (props) => (
	<Div>
		<H3 py={2}>Color Palette</H3>
		<Flex flexWrap="wrap">
			{
				Object.keys(props.theme.colors).map((color) => { 
					if (color != 'white' && color != 'black') {
						return <Box key={color} width={/\d/.test(color) ? .1 : 1}>
							<Div py={color == 'base' ? 3 : 2} px={2} bg={props.theme.colors[color]}>
								<Text color={parseInt(props.theme.colors[color].slice(1),16) > 9999999 ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.5)'} f={color == 'base' ? 2 : 1}>{color}</Text>
								<Text color={parseInt(props.theme.colors[color].slice(1),16) > 9999999 ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255,.5)'} f={0}>{props.theme.colors[color]}</Text>
							</Div>
						</Box>
					}
				})
			}
		</Flex>
	</Div>
)