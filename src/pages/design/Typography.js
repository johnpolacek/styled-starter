import { ThemeProvider } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Div, H1, H2, H3, H4, H5, H6, Text, Code, Em, Strong, Small, U, Del } from 'styled-system-html'
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Link from '../../components/Link'
import CodeSpecimen from '../../components/CodeSpecimen'

const scope = { Div, H1, H2, H3, H4, H5, H6, Text, Code, Em, Strong, Small, U, Del, Link }

export default (props) => (
	<Div>
		<Section>
			<Heading>Font</Heading>
			<Text f={0} color="gray">{props.theme.font}</Text>
			<Text pt={3} f={5}>The quick brown fox jumps over the lazy dog.</Text>
			<Flex flexWrap="wrap" pt={2}>
				{[100,200,300,400,500,600,700,800,900].map((weight) => {
					return(
						<Div bg="white" key={weight} mr={1} mb={1} border="1px solid" borderColor="#eee">
							<Text style={{fontWeight:weight}} py={1} px={3} f={4}>Aa</Text>
							<Div pt={1} pb={2} px={3} borderTop="1px solid" borderColor="#eee">
								<Text f={0} color='gray'>{weight}</Text>
							</Div>
						</Div>
					)
				})}
			</Flex>
			<Flex>
				<Box>
					<Div bg="white" mr={1} mb={1} border="1px solid" borderColor="#eee">
						<Text py={1} px={3} f={4}>Aa</Text>
						<Div pt={1} pb={2} px={3} borderTop="1px solid" borderColor="#eee">
							<Text f={0} color='gray'>Reg</Text>
						</Div>
					</Div>
				</Box>
				<Box>
					<Div bg="white" mr={1} mb={1} border="1px solid" borderColor="#eee">
						<Text py={1} px={3} fontWeight="bold" f={4}>Aa</Text>
						<Div pt={1} pb={2} px={3} borderTop="1px solid" borderColor="#eee">
							<Text f={0} color='gray'>Bold</Text>
						</Div>
						</Div>
				</Box>
				<Box>
					<Div bg="white" mr={1} mb={1} border="1px solid" borderColor="#eee">
						<Text py={1} px={3} f={4}><em>Aa</em></Text>
						<Div pt={1} pb={2} px={3} borderTop="1px solid" borderColor="#eee">
							<Text f={0} color='gray'>Italic</Text>
						</Div>
					</Div>
				</Box>
			</Flex>
		</Section>
		<Section>
			<Heading>Type Scale</Heading>
			<Flex flexWrap="wrap">
				{
					props.theme.fontSizes.map((size) => {
						return (
							<Box key={'f'+size} width={[1/2,1/4,1/5]} pb={1} pr={1}>
								<Div bg="white" border="1px solid" borderColor="#eee" textAlign="center" css={{minHeight:'140px'}}>
									<Div borderColor="#eee" borderBottom="1px solid" py={1} px={3}>
										<Text f={0} color='gray'>{size}</Text>
									</Div>
									<Div textAlign='center' css={{height:'75%'}}>
										<Div mx='auto'>
											<Text py={1} px={3} f={size}>Aa</Text>
										</Div>
									</Div>
								</Div>
							</Box>
						)
					})
				}
			</Flex>
		</Section>
		<Section>
			<Heading>Headings</Heading>
			<CodeSpecimen code={`<H1 f={6}>Heading 1</H1>`} scope={scope} />
			<CodeSpecimen code={`<H2 f={5}>Heading 2</H2>`} scope={scope} />
			<CodeSpecimen code={`<H3 f={4}>Heading 3</H3>`} scope={scope} />
			<CodeSpecimen code={`<H4 f={3}>Heading 4</H4>`} scope={scope} />
			<CodeSpecimen code={`<H5 f={2}>Heading 5</H5>`} scope={scope} />
			<CodeSpecimen code={`<H6 f={1}>Heading 6</H6>`} scope={scope} />
		</Section>
		<Section>
			<Heading>Paragraph</Heading>
			<CodeSpecimen f="15px" code={`<Para>
Bring to the table win-win survival 
strategies to ensure clickthroughs. 
At the end of the day, going forward, 
a new normal that has evolved is 
on the runway heading towards a 
streamlined cloud solution. 
This filler copy was generated with 
<Link href="http://www.cipsum.com/">
Corporate Ipsum
</Link>
</Para>`} scope={scope} />
		</Section>
		<Section>
			<Heading>Text</Heading>
			<CodeSpecimen code={`<Text>A text element</Text>`} scope={scope} />
			<CodeSpecimen code={`<Link href="#">A link</Link>`} scope={scope} />
			<CodeSpecimen code={`<Code>// Some code</Code>`} scope={scope} />
			<CodeSpecimen code={`<Em>Em</Em>`} scope={scope} />
			<CodeSpecimen code={`<Strong>Strong</Strong>`} scope={scope} />
			<CodeSpecimen code={`<Small>Small</Small>`} scope={scope} />
			<CodeSpecimen code={`<U>Underline</U>`} scope={scope} />
			<CodeSpecimen code={`<Del>Del</Del>`} scope={scope} />
		</Section>
	</Div>
)