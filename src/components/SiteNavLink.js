import { Box, Text, A } from 'styled-system-html';
import Link from 'next/link'

export default (props) => (
	<Box w={props.url === '/' ? [1,'auto'] : 'auto'} p={[2,3]}>
	    {
	    	props.isCurrent ? (
	    		<Text color="white">{props.children}</Text>
	    	) : (
		    	<Link href={props.url} as={process.env.BACKEND_URL + props.url}>
		    		<A color="white" style={{textDecoration:'none',opacity:.5}} href={props.url}>{props.children}</A>
		    	</Link>	    	
	    	)
	    }
	</Box>
)
