import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Head		from './Head'
import SiteNav from '../components/SiteNav'
import { Div, Text, H3 } from 'styled-system-html';
import themes 	from '../_Themes';
import theme from '../_Theme'
import ChooseThemeModal from '../components/ChooseThemeModal'

export default (props) => (
	<Div fontFamily={props.theme.fontFamilies[0]}>
	    <Head prefix={props.prefix} />
	    <ThemeProvider theme={props.theme}>
	    	<Div>
	    		{
	    			props.enableChooseThemeModal &&
					<ChooseThemeModal themes={themes} />
	    		}
				<SiteNav theme={props.theme} current={props.name} />
				<Div>
					{React.cloneElement(props.children, { theme: props.theme })}
				</Div>
			</Div>
    	</ThemeProvider>
    	{
    		props.theme.webfont && 
			<link key={props.theme.webfont} rel='stylesheet' href={"https://fonts.googleapis.com/css?family="+props.theme.webfont+":100,200,300,400,500,600,700,800,900"} />
		}
  	</Div>
)

