import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Box, Text } from 'styled-system-html';
import theme 	from '../_Theme';
import Head		from './Head'
import SiteNav from '../components/SiteNav'

class App extends Component {

	constructor() {
		super();
		this.state = {theme:theme};

		this.onEditTheme = this.onEditTheme.bind(this);
	}

	onEditTheme() {
		alert('Theme editing... coming soon!');
	}
	
	render() {
	    return (
	    	<Box>
			    <Head prefix={this.props.prefix} />
			    <ThemeProvider theme={this.state.theme || theme}>
			    	<Box>
						<SiteNav onEditTheme={this.onEditTheme} current={this.props.name} />
						<Box>
							{this.props.children}
						</Box>
					</Box>
		    	</ThemeProvider>
		  	</Box>
	    );
	}
}

App.propTypes = {
	children: PropTypes.element.isRequired,
    prefix: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}


export default App;
