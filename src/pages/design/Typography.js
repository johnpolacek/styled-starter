import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, H1, H2, H3, H4, H5, H6, Text, Code, Em, Strong, Small, U, Del } from 'styled-system-html';
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Link from '../../components/Link'
import CodeSpecimen from '../../components/CodeSpecimen'

const scope = { Flex, Box, H1, H2, H3, H4, H5, H6, Text, Code, Em, Strong, Small, U, Del, Link };

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Section>
	    			<Heading>Font</Heading>
	    			<Text f={0} color="gray">{props.theme.font}</Text>
	    			<Text pt={3} f={5}>The quick brown fox jumps over the lazy dog.</Text>
	    			<Flex wrap="wrap" pt={2}>
						{[100,200,300,400,500,600,700,800,900].map((weight) => {
							return(
								<Box bg="white" key={weight} mr={1} mb={1} borderWidth="1px" borderColor="#eee">
									<Text style={{fontWeight:weight}} py={1} px={3} f={4}>Aa</Text>
									<Box pt={1} pb={2} px={3} borderWidth="1px" borderTop borderColor="#eee">
										<Text f={0} color='gray'>{weight}</Text>
									</Box>
								</Box>
							)
						})}
					</Flex>
					<Flex>
						<Box bg="white" mr={1} mb={1} borderWidth="1px" borderColor="#eee">
							<Text py={1} px={3} f={4}>Aa</Text>
							<Box pt={1} pb={2} px={3} borderWidth="1px" borderTop borderColor="#eee">
								<Text f={0} color='gray'>Reg</Text>
							</Box>
						</Box>
						<Box bg="white" mr={1} mb={1} borderWidth="1px" borderColor="#eee">
							<Text py={1} px={3} bold f={4}>Aa</Text>
							<Box pt={1} pb={2} px={3} borderWidth="1px" borderTop borderColor="#eee">
								<Text f={0} color='gray'>Bold</Text>
							</Box>
						</Box>
						<Box bg="white" mr={1} mb={1} borderWidth="1px" borderColor="#eee">
							<Text py={1} px={3} f={4}><em>Aa</em></Text>
							<Box pt={1} pb={2} px={3} borderWidth="1px" borderTop borderColor="#eee">
								<Text f={0} color='gray'>Italic</Text>
							</Box>
						</Box>
					</Flex>
	    		</Section>

	    		<Section>
	    			<Heading>Type Scale</Heading>
	    			<Flex wrap="wrap">
	    				{
	    					props.theme.fontSizes.map((size) => {
	    						return (
	    							<Box key={'f'+size} w={[1/2,1/4,1/5]} style={{minHeight:'140px'}} pb={1} pr={1} align="center">
										<Box bg="white" borderWidth="1px" borderColor="#eee" style={{height:'100%'}}>
											<Box borderWidth="1px" borderColor="#eee" borderBottom py={1} px={3}>
												<Text f={0} color='gray'>{size}</Text>
											</Box>
											<Flex align='center' style={{height:'75%'}}>
												<Box mx='auto'>
													<Text py={1} px={3} f={size}>Aa</Text>
												</Box>
											</Flex>
										</Box>
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
			</Box>
		</Box>
	</ThemeProvider>
)