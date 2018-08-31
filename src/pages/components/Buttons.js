import { ThemeProvider } from 'styled-components';
import { Div, H1, H2, H3, H4, H5, H6, Text, UL, LI, Image } from 'styled-system-html';
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Button from '../../components/Button'
import ButtonSmall from '../../components/ButtonSmall'
import ButtonLarge from '../../components/ButtonLarge'
import ButtonOutline from '../../components/ButtonOutline'
import CodeSpecimen from '../../components/CodeSpecimen'

const scope = { Button, ButtonSmall, ButtonLarge, ButtonOutline };

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Div p={4} mx={1}>
			<Div pt={3} px={2} mw="960px">
				<Section>
					<Heading>Buttons</Heading>
					<Div pb={4}>
						<CodeSpecimen f="12px" w={2/3} code={`<Button>Base Button</Button>`} scope={scope} />
					</Div>
					{
						Object.keys(props.theme.colors).map(
							(color) => { 
								if (color != 'base' && color != 'white' && color != 'black' && color != 'gray' && !(/\d/.test(color))) {
									return (
										<Div pb={4}>
											<CodeSpecimen f="12px" w={2/3} code={`<Button bg="`+color+`">`+color.substring(0,1).toUpperCase()+color.substring(1)+` Button</Button>`} scope={scope} />
										</Div>
									)
								}
							}
						)
					}
					{
						Object.keys(props.theme.colors).map(
							(color) => { 
								if (color != 'base' && color != 'white' && color != 'black' && color != 'gray' && !(/\d/.test(color))) {
									return <CodeSpecimen f="14px" w={2/3} code={`<ButtonOutline color="`+color+`">Outline `+color.substring(0,1).toUpperCase()+color.substring(1)+`</ButtonOutline>`} scope={scope} />
								}
							}
						)
					}
					<CodeSpecimen f="14px" w={2/3} code={`<Button bg="gray" disabled>Disabled</Button>`} scope={scope} />
					<CodeSpecimen f="14px" w={2/3} code={`<ButtonSmall>Small Button</ButtonSmall>`} scope={scope} />
					<CodeSpecimen f="14px" w={2/3} code={`<ButtonLarge>Large Button</ButtonLarge>`} scope={scope} />
				</Section>
    		</Div>
    	</Div>
	</ThemeProvider>
)