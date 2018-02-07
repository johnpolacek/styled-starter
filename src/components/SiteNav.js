import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, Flex, Box, H1, A, Img } from 'styled-system-html';
import Link from 'next/link'
import SiteNavLink from './SiteNavLink'
import SiteNavLinkExternal from './SiteNavLinkExternal'

class SiteNav extends Component {
	render() {
	    return (
	    	<Nav bg="green7" align='left' px={[2,0,2]} position="relative" style={{zIndex:9999}}>
	    		<Flex wrap="wrap">
	    			<SiteNavLink url="/" isCurrent={this.props.current === 'Index'}>Styled Starter</SiteNavLink>
	    			<SiteNavLink url="/getting-started" isCurrent={this.props.current === 'Getting Started'}>Getting Started</SiteNavLink>
	    			<SiteNavLink url="/styleguide" isCurrent={this.props.current === 'Styleguide'}>Styleguide</SiteNavLink>
	    			<Box ml="auto">
	    				<SiteNavLinkExternal url="https://github.com/johnpolacek/styled-starter"><Img position="relative" style={{top:'3px',left:'-1px'}} src="./static/images/github.svg" height="18" alt="Octocat" /> Github</SiteNavLinkExternal>
	    			</Box>
		    	</Flex>
	    	</Nav>
	    );
	}
}

SiteNav.propTypes = {
    current: PropTypes.string.isRequired,
}

export default SiteNav;
