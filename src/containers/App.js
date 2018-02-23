import React, { Component } from 'react';
import connect from 'refunk';
import { ThemeProvider } from 'styled-components';
import { Box, Text, H3 } from 'styled-system-html';
import theme 	from '../_Theme';
import themes 	from '../_Themes';
import Head		from './Head'
import SiteNav from '../components/SiteNav'
import ChooseThemeModal from '../components/ChooseThemeModal'

const App = (props) => (

	<Box style={{fontFamily:props.theme.fontFamilies.sans}}>
	    <Head prefix={props.prefix} />
	    <ThemeProvider theme={props.theme || theme}>
	    	<Box>
	    		{
	    			props.enableChooseThemeModal &&
					<ChooseThemeModal themes={themes} />
	    		}
				<SiteNav currentTheme={props.currentTheme} current={props.name} />
				<Box>
					{React.cloneElement(props.children, { theme: props.theme })}
				</Box>
			</Box>
    	</ThemeProvider>
    	{
    		props.theme.webfonts && props.theme.webfonts.sans && 
			<link key={props.theme.webfonts.sans} rel='stylesheet' href={"https://fonts.googleapis.com/css?family="+props.theme.webfonts.sans+":100,200,300,400,500,600,700,800,900"} />
		}
  	</Box>
)

export default connect(App);
