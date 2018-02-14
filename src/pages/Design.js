import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'styled-system-html';
import Introduction from './design/Introduction';
import Color from './design/Color';
import Font from './design/Font';
import TypeScale from './design/TypeScale';
import Headings from './design/Headings';
import TextElements from './design/TextElements';
import Components from './design/Components';
import Buttons from './design/Buttons';
import Cards from './design/Cards';
import ReactDOM from 'react-dom';
import {Catalog} from 'catalog';
import theme from '../_Theme';


class Design extends Component {
	constructor() {
		super();

		this.state = {theme:theme};
		this.renderCatalog = this.renderCatalog.bind(this);
	}

	renderCatalog() {
		console.dir(this.state.theme);

		const catalogTheme = {
			// Colors
			background: this.state.theme.colors.gray0 || '#F2F2F2',
			textColor: this.state.theme.colors.black,
			codeColor: this.state.theme.colors.gray || '#AAA',
			linkColor: this.state.theme.colors.base,

			// NavigationBar background color, but also sometimes used as a foreground
			// or border color.
			lightColor: '#D6D6D6',

			// Used in PageHeader
			pageHeadingBackground: this.state.theme.colors.base,
			pageHeadingTextColor: '#fff',

			// Used in Menu and PageHeader to make sure the top parts have
			// the same height.
			pageHeadingHeight: 200,

			// Used for navigation bar
			navBarBackground: '#fff',
			navBarTextColor: this.state.theme.colors.blue || this.state.theme.colors.black,

			// Used in ResponsiveTabs (tab text), Download specimen (title text).
			// Typography: headings.
			brandColor: this.state.theme.colors.base,

			sidebarColor: '#fff',
			sidebarColorActive: this.state.theme.colors.gray1 || '#D1312E',
			sidebarColorText: this.state.theme.colors.gray9 || '#003B5C',
			sidebarColorTextActive: this.state.theme.colors.base,
			sidebarColorLine: this.state.theme.colors.gray0 || '#EBEBEB',
			sidebarColorHeading: this.state.theme.colors.base,

			// Used in the html, react, and image specimens.
			bgLight: this.state.theme.colors.gray0 || '#F2F2F2',
			bgDark: this.state.theme.colors.gray8 || '#333333',

			// Fonts
			fontFamily: this.state.theme.font + "'Roboto', sans-serif",
			fontHeading: this.state.theme.font + "'Roboto', sans-serif",
			fontMono: this.state.theme.monospace + "'Roboto Mono', monospace",
		};

		// See catalog/DefaultTheme.js - https://github.com/interactivethings/catalog/blob/master/src/DefaultTheme.js
		ReactDOM.render(
		  	<Catalog
			    title='Styled Starter Design System'
			    theme={catalogTheme}
			    pages={[
			      	{
				        path: '/',
				        title: 'Introduction',
				        content: () => {
					    	return <Introduction theme={this.state.theme} />
					    }
					},
					{
				        path: '/color',
				        title: 'Color',
				        content: () => {
					    	return <Color theme={this.state.theme} />
					    }
					},
					{
						title: 'Typography',
						pages: [
							{
								path: '/font',
						        title: 'Font',
						        content: () => {
							    	return <Font theme={this.state.theme} />
							    }
							},
							{
								path: '/type-scale',
						        title: 'Type Scale',
						        content: () => {
							    	return <TypeScale theme={this.state.theme} />
							    }
							},
							{
								path: '/headings',
						        title: 'Headings',
						        content: () => {
							    	return <Headings theme={this.state.theme} />
							    }
							},
							{
								path: '/text-elements',
						        title: 'Text Elements',
						        content: () => {
							    	return <TextElements theme={this.state.theme} />
							    }
							},
						]
					},
					{
						title: 'Components',
						pages: [
							{
								path: '/overview',
						        title: 'Overview',
						        content: () => {
							    	return <Components theme={this.state.theme} />
							    }
							},
							{
								path: '/buttons',
						        title: 'Buttons',
						        content: () => {
							    	return <Buttons theme={this.state.theme} />
							    }
							},
							{
								path: '/cards',
						        title: 'Cards',
						        content: () => {
							    	return <Cards theme={this.state.theme} />
							    }
							},
						]
				    }
			    ]}
			/>,
			document.getElementById('design-container')
		)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({theme:nextProps.theme});
	}

	componentDidMount() {
		this.renderCatalog();
	}

	componentDidUpdate() {
		this.renderCatalog();
	}

	render() {
		return (
			<Box>
				<div id="design-container" />
			</Box>
		);
	}
}

Design.propTypes = {
	theme: PropTypes.object
}

export default Design;
