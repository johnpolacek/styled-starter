import React, { Component } from 'react';
import { Div, Text, UL, LI } from 'styled-system-html';
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Para from '../../components/Para'
import Link from '../../components/Link'

export default (props) => (
	<Section>
		<Text fontSize={3}>Welcome to the component library for your digital product. It is here you can write UI documentation for the components in your codebase.</Text>
		<Para>Use <Link href="http://jxnblk.com/styled-system/">Styled System</Link> primitives as building blocks for your own React Components or from an existing library.</Para>
		<UL>
			<LI><Link href="http://jxnblk.com/rebass/">Rebass</Link></LI>
			<LI><Link href="https://github.com/jxnblk/grid-styled">Grid Styled</Link></LI>
			<LI><Link href="https://github.com/jxnblk/system-components">System Components</Link></LI>
			<LI><Link href="https://johnpolacek.github.io/styled-system-html/">Styled System HTML</Link></LI>
			<LI><Link href="https://github.com/jxnblk/macro-components">Macro Components</Link></LI>
		</UL>
		<Text fontStyle="italic" py={4}>Note: All <Link href="#/cards">component code samples</Link> within the style guide are editable -- thanks <Link href="https://github.com/FormidableLabs/react-live">React Live</Link>.</Text>
	</Section>
)