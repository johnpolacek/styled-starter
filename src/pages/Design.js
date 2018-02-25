import React, { Component } from 'react';
import { setFont, setWebFont, deleteColor, updateColorName, updateColorValue } from '../updaters'
import connect from 'refunk';
import { Box, Text } from 'styled-system-html';
import Introduction from './design/Introduction';
import Theme from './design/Theme';
import Color from './design/Color';
import Font from './design/Font';
import TypeScale from './design/TypeScale';
import Headings from './design/Headings';
import Lists from './design/Lists';
import TextElements from './design/TextElements';
import Paragraph from './design/Paragraph';
import Layout from './design/Layout';
import Components from './design/Components';
import Buttons from './design/Buttons';
import Cards from './design/Cards';
import Forms from './design/Forms';
import Rebass from './design/Rebass';
import ReactDOM from 'react-dom';
import {Catalog} from 'catalog';


class Design extends Component {
	constructor() {
		super();
		this.renderCatalog = this.renderCatalog.bind(this);
	}

	renderCatalog() {
		const catalogTheme = {
			// Colors
			background: this.props.theme.colors.gray0 || '#F2F2F2',
			textColor: this.props.theme.colors.black,
			codeColor: this.props.theme.colors.gray || '#AAA',
			linkColor: this.props.theme.colors.base,

			// NavigationBar background color, but also sometimes used as a foreground
			// or border color.
			lightColor: '#D6D6D6',

			// Used in PageHeader
			pageHeadingBackground: this.props.theme.colors.base,
			pageHeadingTextColor: '#fff',

			// Used in Menu and PageHeader to make sure the top parts have
			// the same height.
			pageHeadingHeight: 200,

			// Used for navigation bar
			navBarBackground: '#fff',
			navBarTextColor: this.props.theme.colors.blue || this.props.theme.colors.black,

			// Used in ResponsiveTabs (tab text), Download specimen (title text).
			// Typography: headings.
			brandColor: this.props.theme.colors.base,

			sidebarColor: '#fff',
			sidebarColorActive: this.props.theme.colors.gray1 || '#D1312E',
			sidebarColorText: this.props.theme.colors.gray9 || '#003B5C',
			sidebarColorTextActive: this.props.theme.colors.base,
			sidebarColorLine: this.props.theme.colors.gray0 || '#EBEBEB',
			sidebarColorHeading: this.props.theme.colors.base,

			// Used in the html, react, and image specimens.
			bgLight: this.props.theme.colors.gray0 || '#F2F2F2',
			bgDark: this.props.theme.colors.gray8 || '#333333',

			// Fonts
			fontFamily: this.props.theme.font + "'Roboto', sans-serif",
			fontHeading: this.props.theme.font + "'Roboto', sans-serif",
			fontMono: this.props.theme.monospace + "'Roboto Mono', monospace",
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
					    	return <Introduction theme={this.props.theme} />
					    }
					},
					{
				        path: '/theme',
				        title: 'Theme',
				        content: () => {
					    	return <Theme updaters={{
					    		setFont: (newFont) => {this.props.update(setFont(newFont))},
					    		setWebFont: (newFont) => {this.props.update(setWebFont(newFont))},
								deleteColor: (color) => {this.props.update(deleteColor(color))},
								updateColorName: (colorName) => {this.props.update(updateColorName(colorName))},
								updateColorValue: (color) => {this.props.update(updateColorValue(color))},
					    	}} theme={this.props.theme} />
					    }
					},
					{
				        path: '/color',
				        title: 'Color',
				        content: () => {
					    	return <Color theme={this.props.theme} />
					    }
					},
					{
						title: 'Typography',
						pages: [
							{
								path: '/font',
						        title: 'Font',
						        content: () => {
							    	return <Font theme={this.props.theme} />
							    }
							},
							{
								path: '/type-scale',
						        title: 'Type Scale',
						        content: () => {
							    	return <TypeScale theme={this.props.theme} />
							    }
							},
							{
								path: '/text-elements',
						        title: 'Text Elements',
						        content: () => {
							    	return <TextElements theme={this.props.theme} />
							    }
							},
							{
								path: '/headings',
						        title: 'Headings',
						        content: () => {
							    	return <Headings theme={this.props.theme} />
							    }
							},
							{
								path: '/paragraph',
						        title: 'Paragraph',
						        content: () => {
							    	return <Paragraph theme={this.props.theme} />
							    }
							},
							{
								path: '/lists',
						        title: 'Lists',
						        content: () => {
							    	return <Lists theme={this.props.theme} />
							    }
							}
						]
					},
					{
				        path: '/layout',
				        title: 'Layout',
				        content: () => {
					    	return <Layout theme={this.props.theme} />
					    }
					},
					{
						title: 'Components',
						pages: [
							{
								path: '/overview',
						        title: 'Overview',
						        content: () => {
							    	return <Components theme={this.props.theme} />
							    }
							},
							{
								path: '/buttons',
						        title: 'Buttons',
						        content: () => {
							    	return <Buttons theme={this.props.theme} />
							    }
							},
							{
								path: '/cards',
						        title: 'Cards',
						        content: () => {
							    	return <Cards theme={this.props.theme} />
							    }
							},
							{
								path: '/forms',
						        title: 'Forms',
						        content: () => {
							    	return <Forms theme={this.props.theme} />
							    }
							},
							{
								path: '/rebass',
						        title: 'Rebass',
						        content: () => {
							    	return <Rebass theme={this.props.theme} />
							    }
							}
						]
				    }
			    ]}
			/>,
			document.getElementById('design-container')
		)
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

export default connect(Design);
