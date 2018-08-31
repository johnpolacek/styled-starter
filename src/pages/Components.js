import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'
import { Div, H3, Nav, Ul, Li, A } from 'styled-system-html'
import DocsPage from './DocsPage'

import Introduction from './components/Introduction'
import Buttons from './components/Buttons'
import Cards from './components/Cards'
import Forms from './components/Forms'
import Rebass from './components/Rebass'

const content = {
	'Introduction': Introduction,
	'Buttons': Buttons,
	'Cards': Cards,
	'Forms': Forms,
	'Rebass': Rebass,
}

export default (props) => (
	<DocsPage title="UI Components" content={content} defaultContent='Introduction' {...props} />
)