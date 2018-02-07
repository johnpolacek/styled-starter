import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, A } from 'styled-system-html';

class SiteNavLinkExternal extends Component {
	render() {
	    return (
		    <Box p={[2,3]}>
			    <A color="white" style={{textDecoration:'none',opacity:.5}} href={this.props.url}>{this.props.children}</A>
			</Box>
	    );
	}
}

SiteNavLinkExternal.propTypes = {
    url: PropTypes.string.isRequired,
}

export default SiteNavLinkExternal;
