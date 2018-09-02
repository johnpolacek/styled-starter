import React, { Component } from 'react';
import { Div, H1, H3 } from 'styled-system-html';

class DocsSection extends Component {
	constructor() {
		super()
		this.state = {active:false,opacity:0}
		this.fade = this.fade.bind(this)
	}

	componentDidUpdate() {
		if (this.props.active !== this.state.active) {
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
			<Div display={this.state.active ? 'block' : 'none'} minHeight='92vh' position="absolute" top="0" left="0" width={1}>
				<Div p={4} bg="base">
					<H3 pt={5} fontWeight="normal" color="white" opacity=".75">Styled Starter {this.props.docsTitle}</H3>
					<H1 css={{opacity:this.state.opacity,transition:'opacity .25s ease-out'}} fontWeight="normal" color="white">{this.props.title}</H1>
				</Div>
				<Div css={{opacity:this.state.opacity,display:this.state.active ? 'block' : 'none',transition:'opacity .25s ease-out'}} p={4}>
					<Div pt={3} px={2} maxWidth="960px">
						{this.props.children}
					</Div>
				</Div>
			</Div>
		)
	}
}

export default DocsSection