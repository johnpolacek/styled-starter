import connect from 'refunk';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, H4, Text, Input } from 'styled-system-html';
import Heading from '../../components/Heading';
import Link from '../../components/Link';
import CodeBlock from '../../components/CodeBlock'
import FontSelectBrowser from '../../components/FontSelectBrowser'
import FontSelectWeb from '../../components/FontSelectWeb'


const Theme = (props) => (
	<ThemeProvider theme={props.theme}>
		<Flex wrap="wrap" p={4} mx={1}>
			<Box w={[1,1,1/2]} pr={4}>
				<Heading>Edit Theme</Heading>
				<H4 py={2}>Choose a font</H4>
				<Box pb={3}>
					<FontSelectBrowser setFont={props.updaters.setFont} />
				</Box>
				<Box pb={3}>
					<FontSelectWeb setWebFont={props.updaters.setWebFont} />
				</Box>
				<H4 pt={4} pb={2}>Choose colors</H4>
				<Flex w={[310,310,310,310,370]} wrap="wrap">{
					Object.keys(props.theme.colors).map(
						(color) => { 
							if (color != 'white' && color != 'black' && !(/\d/.test(color))) {
								return <Flex key={color} position="relative" wrap="wrap" w={1} p={3} mb={3} bg="white" borderWidth="1px" borderColor="#ddd">
									<Box w={[255,255,255,255,20]} key={color} p={3} mr={3} bg={props.theme.colors[color]} />
									<Box pt={[2,2,2,2,0]}>
										{
											color !== 'base' ? (
												<Input style={{fontFamily:props.theme.font}} onBlur={(e) => { 
													if (e.target.value !== '') {
														props.updaters.updateColorName({old:color,new:e.target.value})
													} else { 
														props.updaters.deleteColor(color) 
													}
												}} w={120} mr={3} defaultValue={color} />
											) : (
												<Input readOnly borderColor='white' w={120} mr={3} defaultValue={color} />
											)
										}
										
										<Input data-value={props.theme.colors[color].toUpperCase().replace('#','')} onBlur={(e) => {
											if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e.target.value)) {
												props.updaters.updateColorValue({name:color,value:e.target.value})
											} else {
												e.target.value = props.theme.colors[color].toUpperCase()
											}
										}} w={120} defaultValue={props.theme.colors[color].toUpperCase()} />
									</Box>
									{
										color !== 'base' &&
										<Box position="absolute" style={{top:'-2px',right:0, cursor:'pointer'}} pr={[2,2,2,2,3]} py={[0,0,0,0,3]}>
											<Text data-color={color} onClick={(e) => props.updaters.deleteColor(color)} f='24px' color={props.theme.colors.red6 || 'indianred'} children='×' />
										</Box>
									}
								</Flex>
							}
						})
					}
				</Flex>
			</Box>
			<Box w={[1,1,1/2]}>
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
