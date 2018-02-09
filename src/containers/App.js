import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Box, Text, H3 } from 'styled-system-html';
import theme 	from '../_Theme';
import themes 	from '../_Themes';
import Head		from './Head'
import SiteNav from '../components/SiteNav'
import EditThemeModal from '../components/EditThemeModal'

class App extends Component {

	constructor() {
		super();
		this.state = {
			theme:theme, 
			editTheme:false, 
			currentTheme: 'Default Theme'
		};
	}

	render() {
	    return (
	    	<Box style={{fontFamily:this.state.theme.fontFamilies.sans}}>
			    <Head prefix={this.props.prefix} />
			    <ThemeProvider theme={this.state.theme || theme}>
			    	<Box>
			    		{
			    			this.state.editTheme &&
							<EditThemeModal onSelectTheme={(e) => this.setState({currentTheme:e.target.value,theme:themes[e.target.value]})} themes={themes} onClose={() => this.setState({editTheme:false})} />
			    		}
						<SiteNav currentTheme={this.state.currentTheme} onEditTheme={() => this.setState({editTheme:true})} current={this.props.name} />
						<Box>
							{this.props.children}
						</Box>
					</Box>
		    	</ThemeProvider>
		    	{
		    		this.state.theme.webfonts && this.state.theme.webfonts.sans && 
					<link key={this.state.theme.webfonts.sans} rel='stylesheet' href={"https://fonts.googleapis.com/css?family="+this.state.theme.webfonts.sans+":100,200,300,400,500,600,700,800,900"} />
				}
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
