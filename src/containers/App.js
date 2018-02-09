import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Box, Text, H3 } from 'styled-system-html';
import theme 	from '../_Theme';
import Head		from './Head'
import SiteNav from '../components/SiteNav'
import EditThemeModal from '../components/EditThemeModal'

class App extends Component {

	constructor() {
		super();
		this.state = {theme:theme, editTheme:false};
	}

	render() {
	    return (
	    	<Box>
			    <Head prefix={this.props.prefix} />
			    <ThemeProvider theme={this.state.theme || theme}>
			    	<Box>
			    		{
			    			this.state.editTheme &&
							<EditThemeModal onClose={() => this.setState({editTheme:false})} />
			    		}
						<SiteNav onEditTheme={() => this.setState({editTheme:true})} current={this.props.name} />
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
