import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, Flex, Box, H1, A } from 'styled-system-html';
import Link from 'next/link'
import SiteNavLink from './SiteNavLink'

class SiteNav extends Component {
	render() {
	    return (
	    	<Nav bg="green7" align='center' px={3} position="relative" style={{zIndex:9999}}>
	    		<Flex wrap="wrap">
		    		<SiteNavLink url="/" text="Styled Starter" isCurrent={this.props.current === 'Index'} />
		    		<SiteNavLink url="/about" text="About" isCurrent={this.props.current === 'About'} />
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
