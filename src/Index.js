import React, { Component } from 'react';
import { Flex, Box, Button, A, Text } from 'styled-system-html';
import Link from 'next/link'


class Index extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Box>
				<Text>Hello World. <Link href='/about' as={process.env.BACKEND_URL + '/about'}><a>About</a></Link></Text>
				
			</Box>
		);
	}
}

export default Index;
