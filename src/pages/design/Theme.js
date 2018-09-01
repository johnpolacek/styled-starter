import { connect } from 'refunk';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'grid-styled'
import { Div, H4, Text, Span, Input } from 'styled-system-html';
import Heading from '../../components/Heading';
import Link from '../../components/Link';
import CodeBlock from '../../components/CodeBlock'
import FontSelectBrowser from '../../components/FontSelectBrowser'
import FontSelectWeb from '../../components/FontSelectWeb'
import { setFont, setWebFont, updateColorName, updateColorValue, deleteColor } from '../../updaters'



const Theme = (props) => (
	<ThemeProvider theme={props.theme}>
		<Flex wrap="wrap">
			<Box width={[1,1,1/2]} pr={4}>
				<Heading>Edit Theme</Heading>
				<H4 py={2}>Choose a font</H4>
				<Box pb={3}>
					<FontSelectBrowser setFont={(font) => {props.update(setFont(font))}} />
				</Box>
				<Div pb={3}>
					<FontSelectWeb setWebFont={(font) => {props.update(setWebFont(font))}} />
				</Div>
				<H4 pt={4} pb={2}>Choose colors</H4>
				<Flex width={[310,310,310,310,370]} flexWrap="wrap">{
					Object.keys(props.theme.colors).map(
						(color) => { 
							if (color != 'white' && color != 'black' && !(/\d/.test(color))) {
								return <Flex key={color} flexWrap="wrap" width={1} css={{position:'relative',background:'white',border:'solid 1px '+props.theme.colors.gray2}} p={3} mb={3}>
									<Box width={[255,255,255,255,20]} key={color} p={3} mr={3} bg={props.theme.colors[color]} />
									<Box pt={[2,2,2,2,0]}>
										{
											color !== 'base' ? (
												<Input style={{fontFamily:props.theme.font}} onBlur={(e) => { 
													if (e.target.value !== '') {
														props.update(updateColorName({old:color,new:e.target.value}))
													} else { 
														props.update(deleteColor(color))
													}
												}} width={120} mr={3} defaultValue={color} />
											) : (
												<Input readOnly borderColor='white' width={120} mr={3} defaultValue={color} />
											)
										}
									
										<Input data-value={props.theme.colors[color].toUpperCase().replace('#','')} onBlur={(e) => {
											if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e.target.value)) {
												props.update(updateColorValue({name:color,value:e.target.value}))
											} else {
												e.target.value = props.theme.colors[color].toUpperCase()
											}
										}} width={120} defaultValue={props.theme.colors[color].toUpperCase()} />
									</Box>
									{
										color !== 'base' &&
										<Div position="absolute" top="0" right="0" style={{cursor:'pointer'}}>
											<Span position="absolute" top="0" right="8px" data-color={color} onClick={(e) => props.update(deleteColor(color))} fontSize='24px' color={props.theme.colors.red6 || 'indianred'} children='×' />
										</Div>
									}
								</Flex>
							}
						})
					}
				</Flex>
			</Box>
			<Box width={[1,1,1/2]}>
				<Heading>Theme Data</Heading>
				{
					props.theme &&
					<Box id="themeData" my={2} bg="white">
						<CodeBlock>{JSON.stringify(props.theme, null, 2)}</CodeBlock>
					</Box>
				}
			</Box>
		</Flex>
	</ThemeProvider>
)

export default connect(Theme);
