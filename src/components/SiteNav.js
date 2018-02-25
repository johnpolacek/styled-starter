import connect from 'refunk';
import { enableChooseThemeModal } from '../updaters'
import { Nav, Flex, Box, H1, A, Img, Text, Button, Span } from 'styled-system-html';
import Link from 'next/link'
import SiteNavLink from './SiteNavLink'
import SiteNavLinkExternal from './SiteNavLinkExternal'

const SiteNav = (props) => (
	<Box bg="base" position="relative" style={{zIndex:9999}}>
		<Nav bg="rgba(0,0,0,.2)" align='left' px={[2,0,2]}>
	    	<Box position="absolute" style={{top:0,right:0}} mt={[4,3]} pt={4} pr={2}>
	    		<Text onClick={() => props.update(enableChooseThemeModal(true))} style={{cursor:'pointer'}} display="inline-block" f={1} pr={3} color="white"><Span id="currentTheme">{props.theme.name}</Span> <Button fontWeight="bold" ml={1} px={1} py='2px' f={0} color="blue">choose theme</Button></Text>
				<Box display="inline-block" p={3} mt={2}>
					<Img position="relative" style={{top:'4px'}} width="80" src="https://travis-ci.org/johnpolacek/styled-starter.svg?branch=master" alt="branch health status" />
				</Box>
			</Box>
    		<Flex wrap="wrap">
    			<SiteNavLink url="/" isCurrent={props.current === 'Index'}>Styled Starter</SiteNavLink>
    			<SiteNavLink url="/about" isCurrent={props.current === 'About'}>About</SiteNavLink>
    			<SiteNavLink url="/design" isCurrent={props.current === 'Design'}>Design</SiteNavLink>
    			<Box ml="auto">
    				<SiteNavLinkExternal url="https://github.com/johnpolacek/styled-starter">
    					<Img position="relative" style={{top:'3px',left:'-1px'}} src={(props.current === 'Index' ? '.' : '..') + '/static/images/github.svg'} height="18" alt="Octocat" /> Github
    				</SiteNavLinkExternal>
    			</Box>
	    	</Flex>
		</Nav>
	</Box>
)

export default connect(SiteNav);
