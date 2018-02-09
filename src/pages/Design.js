import React, { Component } from 'react';
import { Box, Text } from 'styled-system-html';
import Introduction from './design/Introduction'
import ReactDOM from 'react-dom';
import {Catalog} from 'catalog';
import theme from '../_Theme';

// See catalog/DefaultTheme.js - https://github.com/interactivethings/catalog/blob/master/src/DefaultTheme.js
const designTheme = {
	// Colors
	background: theme.colors.gray0 || '#F2F2F2',
	textColor: theme.colors.black,
	codeColor: theme.colors.gray || '#AAA',
	linkColor: theme.colors.base,

	// NavigationBar background color, but also sometimes used as a foreground
	// or border color.
	lightColor: '#D6D6D6',

	// Used in PageHeader
	pageHeadingBackground: theme.colors.base,
	pageHeadingTextColor: '#fff',

	// Used in Menu and PageHeader to make sure the top parts have
	// the same height.
	pageHeadingHeight: 200,

	// Used for navigation bar
	navBarBackground: '#fff',
	navBarTextColor: theme.colors.blue || theme.colors.black,

	// Used in ResponsiveTabs (tab text), Download specimen (title text).
	// Typography: headings.
	brandColor: theme.colors.base,

	sidebarColor: '#fff',
	sidebarColorActive: theme.colors.gray1 || '#D1312E',
	sidebarColorText: theme.colors.gray9 || '#003B5C',
	sidebarColorTextActive: theme.colors.base,
	sidebarColorLine: theme.colors.gray0 || '#EBEBEB',
	sidebarColorHeading: theme.colors.base,

	// Used in the html, react, and image specimens.
	bgLight: theme.colors.gray0 || '#F2F2F2',
	bgDark: theme.colors.gray8 || '#333333',

	// Fonts
	fontFamily: theme.font + "'Roboto', sans-serif",
	fontHeading: theme.font + "'Roboto', sans-serif",
	fontMono: theme.monospace + "'Roboto Mono', monospace",
};


class Design extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		ReactDOM.render(
		  	<Catalog
			    title='Styled Starter Design System'
			    theme={designTheme}
			    pages={[
			      {
			        path: '/',
			        title: 'Introduction',
			        content: require('./design/Introduction')
			      },
			      {
			        path: '/color',
			        title: 'Color',
			        content: require('./design/Color')
			      }
			    ]}
			/>,
			document.getElementById('design-container')
		)
	}

	render() {
		return (
			<Box>
				<div id="design-container" />
			</Box>
		);
	}
}



export default Design;
