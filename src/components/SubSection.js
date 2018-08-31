import React, { Component } from 'react';
import { Div } from 'styled-system-html';

class SubSection extends Component {
	constructor() {
		super()
		this.state = {active:false,opacity:0}
		this.fade = this.fade.bind(this)
	}

	componentDidUpdate() {
		if (this.props.active  !== this.state.active) {
			this.setState({active:this.props.active})
			this.fade(this.props.active ? 1 : 0)
		}
	}

	fade(opacity) {
		setTimeout(() => {
			this.setState({opacity:opacity})
		},1)
	}

	render() {
		return (
			<Div css={{opacity:this.state.opacity,display:this.state.active ? 'block' : 'none',transition:'opacity .25s ease-out'}}>
				<Div p={4} mx={1}>
					<Div pt={3} px={2} maxWidth="960px">
						{this.props.children}
					</Div>
				</Div>
			</Div>
		)
	}
}

export default SubSection