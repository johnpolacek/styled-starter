import { connect } from 'refunk';
import { enableChooseThemeModal } from '../updaters'
import { Flex, Box } from 'grid-styled'
import { Div, Nav, H1, A, Img, Text, Span } from 'styled-system-html';
import Button from './Button'
import Link from 'next/link'
import SiteNavLink from './SiteNavLink'
import SiteNavLinkExternal from './SiteNavLinkExternal'

const SiteNav = connect(props => (
    <Div bg="base" position={['relative','relative','fixed']} zIndex="9999" width={1}>
        <Nav bg="rgba(0,0,0,.2)" textAlign='left' px={[2,0,2]}>
            <Div position="absolute" top="48px" right="8px" pl={3} mt={[0,2,3]} bg="base" borderRadius="8px">
                <Text onClick={() => props.update(enableChooseThemeModal(true))} style={{cursor:'pointer'}} display="inline-block" fontSize={1} pr={3} color="white"><Span id="currentTheme">{props.theme.name}</Span> <Button bg="white" fontWeight="bold" ml={1} px={1} py='2px' fontSize={0} color="blue">choose theme</Button></Text>
                <Div display="inline-block" px={3} mt={2}>
                    <Img position="relative" style={{top:'6px'}} width="80px" src="https://travis-ci.org/johnpolacek/styled-starter.svg?branch=master" alt="branch health status" />
                </Div>
            </Div>
            <Flex flexWrap="wrap">
                <SiteNavLink url="/" isCurrent={props.current === 'Index'}>Styled Starter</SiteNavLink>
                <SiteNavLink url="/about" isCurrent={props.current === 'About'}>About</SiteNavLink>
                <SiteNavLink url="/design" isCurrent={props.current === 'Design'}>Design</SiteNavLink>
                <SiteNavLink url="/components" isCurrent={props.current === 'Components'}>Components</SiteNavLink>
                <Box ml="auto">
                    <SiteNavLinkExternal url="https://github.com/johnpolacek/styled-starter">
                        <Img position="relative" css={{top:'3px',left:'-1px',height:'18px'}} src={(props.current === 'Index' ? '.' : '..') + '/static/images/github.svg'} alt="Octocat" /> Github
                    </SiteNavLinkExternal>
                </Box>
            </Flex>
        </Nav>
    </Div>
))

export default SiteNav;