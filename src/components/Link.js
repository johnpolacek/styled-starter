import { A } from 'styled-system-html';

export default (props) => (
	<A {...Object.assign({}, {color: 'blue'}, props)}>{props.children}</A>
)