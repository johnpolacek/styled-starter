import React, { Component } from 'react';
import { Box, Header, H1, H2, Span, A } from 'styled-system-html';

class SiteHeader extends Component {
	render() {
	    return (
	    	<Header align="center" p={[3,3,4]} bg="green" color="white">
				<H1 f={[5,6,7]}>
					<Span color="green4" f={[4,5,6]} position="relative" px={[2,4]} style={{top:'-.2em'}}>&lt;</Span>
					Styled Starter
					<Span color="green4" f={[4,5,6]} position="relative" px={[2,4]} style={{top:'-.2em'}}>/&gt;</Span>
				</H1>
				<Box mw="800px" mx="auto" pb={3}>
					<H2 f={[2,3]} p={[2,3]} color="green2">Starter Kit with React, Next.js, and Styled Components with Styled System to get projects going with a design theme, built-in styleguide and&nbsp;browser&nbsp;testing</H2>
				</Box>
			</Header>
	    );
	}
}

export default SiteHeader;
