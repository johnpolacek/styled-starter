import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'
import { Div, H3, Nav, Ul, Li, A } from 'styled-system-html'
import DocsPage from './DocsPage'

import Introduction from './design/Introduction'
import Theme from './design/Theme'
import Color from './design/Color'
import Typography from './design/Typography'
import Layout from './design/Layout'

const content = {
	'Introduction': Introduction,
	'Theme': Theme,
	'Color': Color,
	'Typography': Typography,
	'Layout': Layout,
}

export default (props) => (
	<DocsPage title="Design System" content={content} defaultContent='Introduction' {...props} />
)