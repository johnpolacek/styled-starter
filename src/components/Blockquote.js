import { Blockquote, Footer } from 'styled-system-html';

// Example usage:
// <Blockquote author="Grandpa Polacek">Son, you have the eyes of an eagle... a dead one.</Blockquote>

export default (props) => (
	<Blockquote 
		bg="gray0" color="base" 
		px={4} py={3} mb={4} ml={[3,4]}
		borderLeft="8px solid" borderColor="gray2"
		fontSize={4} fontStyle="italic">
		{props.children}
		{
			props.author &&
			<Footer mt={2} align="right" pr={5} fontSize={1} color="gray">– {props.author}</Footer>
		}
	</Blockquote>
)