import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import theme 	from '../_Theme';
import Head		from './Head'
import { Box, Text } from 'styled-system-html';
import SiteNav from '../components/SiteNav'

//  <SiteNav current={props.name} onThemeChange={this.onThemeChange} />

export default (props) => (
	<div>
	    <Head prefix={props.prefix} />
	    <ThemeProvider theme={theme}>
	    	<Box>
				<SiteNav current={props.name} />
				<Box>
					{props.children}
				</Box>
			</Box>
    	</ThemeProvider>
  	</div>
)

// Global style
// eslint-disable-next-line
injectGlobal`
	html{box-sizing:border-box;} *,*:before,*:after{box-sizing:inherit;} 
	body{margin:0;font-family:'Nunito',sans-serif;line-height:1.6;} 
	button,input[type=submit]{cursor:pointer;}
	p{line-height:1.5;}
	select{padding:8px;}
	h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{text-rendering:optimizelegibility;margin:0;}
	input,select,textarea{padding:4px;border-radius:4px;border:solid 1px #ccc;font-size:16px;font-family:'Nunito',sans-serif;}
	select{-webkit-appearance:menulist;height:32px;}
	table{border-collapse:collapse;}
`