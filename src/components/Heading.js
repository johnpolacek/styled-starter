import { H3 } from 'styled-system-html';

export default (props) => (
	<H3 {...Object.assign({}, {pb: 3}, props)}>{props.children}</H3>
)