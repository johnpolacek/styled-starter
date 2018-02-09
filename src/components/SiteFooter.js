import React, { Component } from 'react';
import { Footer, Flex, Span, A } from 'styled-system-html';

class SiteFooter extends Component {
	render() {
	    return (
	    	<Footer bg="gray0" borderTop borderWidth={1} borderColor="gray1" py={5} px={3} align="center">
	    		<Span mx={3}>Made by <A color="base" href="https://github.com/johnpolacek" children="John Polacek" /></Span>
				<Span color="gray"> | </Span>
				<A color="base" mx={3} href="http://twitter.com/johnpolacek" children="@johnpolacek" />
				<Span color="gray"> | </Span>
				<A color="base" ml={3} href="http://johnpolacek.com" children="johnpolacek.com" />
			</Footer>
	    );
	}
}

export default SiteFooter;
