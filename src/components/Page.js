import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme 	from '../_Theme';
import Head		from './Head'

export default (props) => (
	<div>
	    <Head />
	    <ThemeProvider theme={theme}>
    		{props.children}
    	</ThemeProvider>
  	</div>
)