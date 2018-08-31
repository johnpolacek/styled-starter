import React, { Component } from 'react'
import { Div, Text } from 'styled-system-html'
import { Panel, PanelHeader, PanelFooter, Subhead } from 'rebass'
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Card from '../../components/Card'
import Link from '../../components/Link'
import Button from '../../components/Button'
import CodeSpecimen from '../../components/CodeSpecimen'

const scope = { Panel, PanelHeader, PanelFooter, Subhead, Div };

export default (props) => (
    	<Section>
        <Heading>Rebass</Heading>
        <Section>
        <Text pb={2}>In addition to your own components, you can use components from other Styled System compatible libraries such as <Link href="http://jxnblk.com/rebass/">Rebass</Link>.</Text>
        <Text py={2}>For example, a Panel component:</Text>
        <CodeSpecimen f="14px" width={2/3} code={`<Panel color='base'>
    <PanelHeader p={3} color='white' bg='base'>
        Hello
    </PanelHeader>
    <Div px={3} py={4}>
    <Subhead>
        Panel
    </Subhead>
    </Div>
    <PanelFooter p={3}color='base'>
        Footer
    </PanelFooter>
</Panel>`} scope={scope} />
    </Section>
  </Section>
)