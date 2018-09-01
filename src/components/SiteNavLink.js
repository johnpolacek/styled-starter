import { Box } from 'grid-styled'
import { Div, Span, A } from 'styled-system-html';
import Link from 'next/link'

export default (props) => (
    <Box>
	    <Div width={props.url === '/' ? [1,'auto'] : 'auto'} p={[2,3]}>
		    {
		    	props.isCurrent ? (
		    		<Span color="white">{props.children}</Span>
		    	) : (
			    	<Link href={props.url}>
			    		<A color="white" style={{textDecoration:'none',opacity:.5}} href={props.url}>{props.children}</A>
			    	</Link>	    	
		    	)
		    }
		</Div>
	</Box>
)
