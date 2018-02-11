import React, { Component } from 'react';
import { Box, Text, A } from 'styled-system-html';
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Para from '../components/Para'


class About extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Box>
				<SiteHeader />
				<Box p={[4,5]} mw="1000px" mx="auto">
					<Para>Styled Starter is built on top of <A href="https://github.com/zeit/next.js">Next.js</A> and <A href="http://jxnblk.com/styled-system/">Styled System</A>, using <A href="https://www.catalog.style/">Catalog</A> for the styleguide.</Para>
					<Text fontStyle="italic" py={5} color="gray">More info coming soon...</Text>
				</Box>
				<SiteFooter />
			</Box>
		);
	}
}

export default About;
