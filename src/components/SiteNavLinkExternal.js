import PropTypes from 'prop-types';
import { Box, Text, A } from 'styled-system-html';

export default (props) => (
	<Box display="inline-block" p={[2,3]}>
	    <A color="white" style={{textDecoration:'none',opacity:.5}} href={props.url}>{props.children}</A>
	</Box>
)
