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