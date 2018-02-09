import React, { Component } from 'react';
import { Box, Header, H1, H2, Span, A, Img } from 'styled-system-html';

class SiteHeader extends Component {
	render() {
	    return (
	    	<Header align="center" py={5} px={[3,3,4]} bg="base" color="white" position="relative">
				<H1 pt={[2,3]} f={[5,6,7]}>
					<Span color="rgba(0,0,0,.2)" f={[4,5,6]} position="relative" px={[2,4]} style={{top:'-.2em'}}>&lt;</Span>
					Styled Starter
					<Span color="rgba(0,0,0,.2)" f={[4,5,6]} position="relative" px={[2,4]} style={{top:'-.2em'}}>/&gt;</Span>
				</H1>
				<Box mw="800px" mx="auto" pb={4}>
					<H2 f={[2,3]} p={[2,3]} color="rgba(255,255,255,.9)">Starter Kit with React, Next.js, and Styled Components with Styled System to get projects going with a design theme, built-in styleguide and&nbsp;browser&nbsp;testing</H2>
				</Box>
			</Header>
	    );
	}
}

export default SiteHeader;
