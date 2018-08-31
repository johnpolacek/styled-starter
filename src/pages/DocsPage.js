import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'
import { Div, H3, Nav, Ul, Li, A } from 'styled-system-html'
import SubSection from '../components/SubSection'

export default class extends React.Component {

	constructor() {
		super()
		this.state = ({content:''})
	}

	componentDidMount() {
  		this.setState({content:window.location.hash ? window.location.hash.replace('#','') : this.props.defaultContent})
  	}

	render () {
		return (
			<Div>
				<Div width={1/6} position="fixed" top="64px" left="0" height="100%" minHeight="100vh" borderRight="1px solid" borderColor="#f4f4f4">
					<H3 p={4} mb={2} color="base">Styled Starter <br/>{this.props.title}</H3>
					<Nav>
						<Ul m={0} p={0} css={{listStyle:'none'}} borderTop="1px solid" borderColor="#f4f4f4">
							{
								Object.keys(this.props.content).map((contentName) => { 
									return (
										<Li key={'navItem'+contentName} px={4} py={3} borderBottom="1px solid" borderColor="#f4f4f4">
											<A color={this.state.content == contentName ? 'base' : 'gray8'} onClick={() => this.setState({content:contentName})} fontWeight="600" css={{textDecoration:'none'}} href={'#'+contentName}>{contentName}</A>
										</Li>
									)
								})
							}
						</Ul>
					</Nav>
				</Div>
				<Div position="absolute" top="64px" right="0" width={5/6} bg="gray0">
					{
						Object.entries(this.props.content).map((content) => { 
							const contentName = content[0]
							const Content = content[1]
							const theme = this.props.theme
							return <SubSection key={contentName+'Content'} active={this.state.content == contentName}><Content theme={theme} /></SubSection>
						})
					}
				</Div>
			</Div>
		)
	}
}