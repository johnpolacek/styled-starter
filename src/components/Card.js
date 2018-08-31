import { Div, Img, H3 } from 'styled-system-html';

export default (props) => (
	<Div bg={props.bg || 'white'} css={{overflow:"hidden"}} borderRadius="8px" borderColor="rgba(0,0,0,.1)" border="1px solid">
		{
			props.imageSrc &&
			<Img style={{display:'block'}} m={0} w={1} src={props.imageSrc} alt={props.imageAlt} />
		}
		
		<Div p={3}>
			{
				props.title &&
				<H3 color={props.color || 'base'} pb={2}>{props.title}</H3>
			}
			{props.children}
		</Div>
	</Div>
)