import { Box, Header, H1, H2, Span, A, Img, LinkButton } from 'styled-system-html';

export default (props) => (
	<Header align="center" py={5} px={[3,3,4]} bg="base" color="white" position="relative">
		<H1 pt={[2,3]} f={[5,6,7]}>
			<Span color="rgba(0,0,0,.2)" f={[4,5,6]} position="relative" px={[2,4]} style={{top:'-.2em'}}>&lt;</Span>
			Styled Starter
			<Span color="rgba(0,0,0,.2)" f={[4,5,6]} position="relative" px={[2,4]} style={{top:'-.2em'}}>/&gt;</Span>
		</H1>
		<Box mw="600px" mx="auto" pb={3}>
			<H2 f={[2,3]} p={[2,3]} mb={3} color="rgba(255,255,255,.9)">Starter Kit for creating Server-Side Rendered React&nbsp;Apps with Next.js and Styled System Components</H2>
			<LinkButton py={3} f={[2,3]} fontWeight="bold" bg="white" color="blue" href="https://github.com/johnpolacek/styled-starter-basic/archive/master.zip">
				<Box borderRadius="4px" bg="blue" color="white" px={2} mr={3} pt="2px" style={{transform:'rotate(-90deg)'}}>&#8676;</Box>
				<Span pr={2}> Download Starter Kit</Span>
			</LinkButton>
		</Box>
	</Header>
)
