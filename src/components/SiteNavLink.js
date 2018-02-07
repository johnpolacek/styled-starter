import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, A } from 'styled-system-html';
import Link from 'next/link'

class SiteNavLink extends Component {
	render() {
	    return (
		    <Box w={this.props.url === '/' ? [1,'auto'] : 'auto'} p={[2,3]}>
			    {
			    	this.props.isCurrent ? (
			    		<Text color="white">{this.props.children}</Text>
			    	) : (
				    	<Link href={this.props.url} as={process.env.BACKEND_URL + this.props.url}>
				    		<A color="white" style={{textDecoration:'none',opacity:.5}} href={this.props.url}>{this.props.children}</A>
				    	</Link>	    	
			    	)
			    }
			</Box>
	    );
	}
}

SiteNavLink.propTypes = {
    isCurrent: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
}

export default SiteNavLink;
