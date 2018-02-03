import React, { Component } from 'react';
import { Flex, Box, Button, A, Text } from 'styled-system-html';
import Link from 'next/link'


class About extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Box>
				<Text>About us</Text>
				<Text>Back to <Link href='/' as={process.env.BACKEND_URL + '/'}><a>Home</a></Link></Text>
			</Box>
		);
	}
}

export default About;
