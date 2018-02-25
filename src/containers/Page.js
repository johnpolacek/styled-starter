import React, { Component } from 'react';
import App from './App'
import theme from '../_Theme'

let savedTheme = false;

class Page extends React.Component {
	constructor() {
		super();
	}

	render() {
		if (typeof localStorage !== 'undefined') {
			savedTheme = JSON.parse(localStorage.getItem('savedTheme'));
		}
		
		return(
			<App {...Object.assign({}, {theme: savedTheme || theme}, this.props)} />
		)
	}
}

export default Page;