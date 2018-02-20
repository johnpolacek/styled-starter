import { P } from 'styled-system-html';

export default (props) => (
	<P {...Object.assign({}, {pb:3}, props)}>{props.children}</P>
)