import React, { Component } from 'react';
import connect from 'refunk';
import App from './App'
import theme from '../_Theme'
import { setTheme } from '../updaters'

class Page extends Component {
	constructor() {
		super()
	}

	componentDidMount() {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('savedTheme')) {
			this.props.update(setTheme(JSON.parse(localStorage.getItem('savedTheme'))))
		}
	}

	render() {
		return (
			<App {...Object.assign({}, {theme:theme}, this.props)} />
		)
	}
}

export default connect(Page);