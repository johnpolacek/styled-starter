import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, Flex, Box, H1, A } from 'styled-system-html';
import Link from 'next/link'
import SiteNavLink from './SiteNavLink'

class SiteNav extends Component {
	render() {
	    return (
	    	<Nav bg="green7" align='left' px={[2,0,2]} position="relative" style={{zIndex:9999}}>
	    		<Flex wrap="wrap">
		    		<SiteNavLink url="/" text="Styled Starter" isCurrent={this.props.current === 'Index'} />
		    		<SiteNavLink url="/getting-started" text="Getting Started" isCurrent={this.props.current === 'Getting Started'} />
		    		<SiteNavLink url="/styleguide" text="Styleguide" isCurrent={this.props.current === 'Styleguide'} />
		    	</Flex>
	    	</Nav>
	    );
	}
}

SiteNav.propTypes = {
    current: PropTypes.string.isRequired,
}

export default SiteNav;
