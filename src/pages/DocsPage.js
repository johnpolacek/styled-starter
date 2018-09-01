import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'
import { Div, H3, Nav, Ul, Li, A, Span } from 'styled-system-html'
import Button from '../components/Button'
import DocsSection from './DocsSection'

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
				<Div css={{transition:'left .2s ease-in-out'}} position="fixed" top={this.state.showNav ? ['36px','52px'] : ['40px','56px']} zIndex="9999" left={this.state.showNav ? '158px' : '0'}>
					<Button bg="rgba(0,0,0,0)" css={{outline:'none !important'}} fontSize={4} onClick={() => this.setState({showNav:!this.state.showNav})}>
						<Span display={this.state.showNav ? 'none' : 'inline'}>&#9776;</Span>
						<Span display={this.state.showNav ? 'inline' : 'none'} color="base">&times;</Span>
						<Span position="absolute" left="-10000px">menu</Span>
					</Button>
				</Div>
				<Div width={[200,200,200,1/5,1/6]} css={{transition:'left .2s ease-in-out'}} position="fixed" top={['38px','58px']} left={this.state.showNav ? '0' : ['-200px','-200px','-200px','0']} height="100%" minHeight="100vh" borderRight="1px solid" borderColor="#f4f4f4" zIndex="9998" bg="white">
					<H3 p={4} mb={2} color="base">Styled Starter <br/>{this.props.title}</H3>
					<Nav>
						<Ul m={0} p={0} css={{listStyle:'none'}} borderTop="1px solid" borderColor="#f4f4f4">
							{
								Object.keys(this.props.content).map((contentName) => { 
									return (
										<Li key={'navItem'+contentName} px={4} py={3} borderBottom="1px solid" borderColor="#f4f4f4">
											<A color={this.state.content == contentName ? 'base' : 'gray8'} onClick={() => this.setState({content:contentName,showNav:false})} fontWeight="600" css={{textDecoration:'none'}} href={'#'+contentName}>{contentName}</A>
										</Li>
									)
								})
							}
						</Ul>
					</Nav>
				</Div>
				<Div position="absolute" top={['36px','54px']} right="0" width={[1,1,1,4/5,5/6]} bg="gray0">
					{
						Object.entries(this.props.content).map((content) => { 
							const contentName = content[0]
							const Content = content[1]
							const theme = this.props.theme
							return <DocsSection key={contentName+'Content'} title={contentName} active={this.state.content == contentName}><Content theme={theme} /></DocsSection>
						})
					}
				</Div>
			</Div>
		)
	}
}