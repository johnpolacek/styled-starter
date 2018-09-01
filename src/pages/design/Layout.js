import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Div, H3, Text } from 'styled-system-html';
import Section from '../../components/Section';
import Heading from '../../components/Heading';
import Para from '../../components/Para';
import Link from '../../components/Link';
import CodeSpecimen from '../../components/CodeSpecimen';

const scope = { Flex, Box };

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Div p={4} mx={1}>
			<Div pt={3} px={2} maxWidth="960px">
				<Section>
	    			<Heading>Grid</Heading>
	    			<Para><Link href="https://jxnblk.com/grid-styled/">Grid Styled</Link> is a responsive React grid system built with styled-components.</Para>
	    			<Flex bg="white" flexWrap="wrap" align="center" mb={4}>
	    				<Box width={[1,1/2,1/3,1/4]}><Div py={4} border="1px solid" borderColor="#EEE">Box</Div></Box>
	    				<Box width={[1,1/2,1/3,1/4]}><Div py={4} border="1px solid" borderColor="#EEE">Box</Div></Box>
	    				<Box width={[1,1/2,1/3,1/4]}><Div py={4} border="1px solid" borderColor="#EEE">Box</Div></Box>
	    				<Box width={[1,1/2,1/3,1/4]}><Div py={4} border="1px solid" borderColor="#EEE">Box</Div></Box>
	    				<Box width={[1,1/2,1/3,1/4]}><Div py={4} border="1px solid" borderColor="#EEE">Box</Div></Box>
	    				<Box width={[1,1/2,1/3,1/4]}><Div py={4} border="1px solid" borderColor="#EEE">Box</Div></Box>
	    				<Box width={[1,1/2,1/3,1/4]}><Div py={4} border="1px solid" borderColor="#EEE">Box</Div></Box>
	    				<Box width={[1,1/2,1/3,1/4]}><Div py={4} border="1px solid" borderColor="#EEE">Box</Div></Box>
	    				<Box width={[1,1/2,1/3,1/4]}><Div py={4} border="1px solid" borderColor="#EEE">Box</Div></Box>
	    				<Box width={[1,1/2,1/3,1/4]}><Div py={4} border="1px solid" borderColor="#EEE">Box</Div></Box>
	    				<Box width={[1,1/2,1/3,1/4]}><Div py={4} border="1px solid" borderColor="#EEE">Box</Div></Box>
	    				<Box width={[1,1/2,1/3,1/4]}><Div py={4} border="1px solid" borderColor="#EEE">Box</Div></Box>
					</Flex>
				</Section>

				<Section>
	    			<Heading>Spacing Scale</Heading>
					{
						Object.keys(props.theme.space).map(
							(space) => { 
								if (parseInt(space) !== 0) {
									return <Div key={'spaceScale'+space} bg="white" display="inline-block" mx={1} border="1px solid" borderColor="#eee" p={parseInt(space)}>
										<Text>{space}</Text>
									</Div>
								}
							}
						)
					}
				</Section>
    		</Div>
    	</Div>
	</ThemeProvider>
)