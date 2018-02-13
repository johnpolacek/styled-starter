import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, H1, H2, H3, H4, H5, H6, Text, Code, Em, Strong, Small, U, Del } from 'styled-system-html';
import Section from '../../components/Section'
import Link from '../../components/Link'
import {CodeSpecimen} from 'catalog';
import * as snippets from '../../snippets'

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Section>
	    			<H3 pt={2}>Font</H3>
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
	    			<H3>Type Scale</H3>
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
	    			<H3>Headings</H3>
	    			<Flex wrap="wrap">
	    				<Box w={1/3}>
		    				<CodeSpecimen lang="jsx">{snippets.headings}</CodeSpecimen>
						</Box>
						<Box pt={2} pl={4} w={1/2}>
		    				<H1 f={6}>Heading 1</H1>
							<H2 f={5}>Heading 2</H2>
							<H3 f={4}>Heading 3</H3>
							<H4 f={3}>Heading 4</H4>
							<H5 f={2}>Heading 5</H5>
							<H6 f={1}>Heading 6</H6>
						</Box>
	    			</Flex>
	    		</Section>
	    		
	    		<Section>
					<H3 pt={3}>Text</H3>
					<Flex wrap="wrap">
	    				<Box w={1/3}>
		    				<CodeSpecimen lang="jsx">{snippets.text}</CodeSpecimen>
						</Box>
						<Box pt={4} pl={4} w={1/2}>
		    				<Text>A text element</Text>
		    				<Link href="#">A link</Link><br/>
		    				<Code>// Some code</Code><br/>
		    				<Em>Em</Em><br/>
							<Strong>Strong</Strong><br/>
							<Small>Small</Small><br/>
							<U>Underline</U><br/>
							<Del>Del</Del><br/>
						</Box>
	    			</Flex>
	    		</Section>
			</Box>
		</Box>
	</ThemeProvider>
)