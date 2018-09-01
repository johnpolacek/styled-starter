import { ThemeProvider } from 'styled-components';
import { Div, H1, H2, H3, H4, H5, H6, Text, UL, LI, Image } from 'styled-system-html';
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Card from '../../components/Card'
import Link from '../../components/Link'
import Button from '../../components/Button'
import CodeSpecimen from '../../components/CodeSpecimen'

const scope = { Card, Div, H3, Text, Button };

export default (props) => (
	<Section>
		<Section>
			<Heading>Cards</Heading>
			<Section>
				<Text pb={2}>With image</Text>
				<CodeSpecimen f="14px" w={2/3} code={`<Card 
	title="Card Title" 
	imageSrc="https://unsplash.it/g/320/180" 
	imageAlt="A placeholder image from Unsplash">
	<Text>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
	</Text>
	<Div align="right" pt={4} pr={2} pb={2}>
		<Button>Find out more</Button>
	</Div>
</Card>`} scope={scope} />
						</Section>

						<Section>
							<Text pb={2}>No image</Text>
							<CodeSpecimen f="14px" w={2/3} code={`<Card title="Card Title">
	<Text>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
		vivamus risus metus vero integer imperdiet aenean dolor. 
	</Text>
	<Div align="right" pt={4} pr={2} pb={2}>
		<Button>Find out more</Button>
	</Div>
</Card>`} scope={scope} />
						</Section>

						<Section>
							<Text pb={2}>Colors</Text>
							{
								Object.keys(props.theme.colors).map(
									(color) => { 
										if (color != 'base' && color != 'white' && color != 'black' && color != 'gray' && !(/\d/.test(color))) {
											return <Div pb={4}><CodeSpecimen f="14px" w={2/3} code={`<Card color="`+color+`" title="Card Title">
	<Text>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
		vivamus risus metus vero integer imperdiet aenean dolor. 
	</Text>
	<Div align="right" pt={4} pr={2} pb={2}>
		<Button bg="`+color+`">Find out more</Button>
	</Div>
</Card>`} scope={scope} /></Div>
							}
						}
					)
				}
			</Section>
		</Section>
	</Section>
)