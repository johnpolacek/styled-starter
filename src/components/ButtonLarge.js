import { Button } from 'styled-system-html';

export default (props) => (
	<Button {...Object.assign({}, {f:3, py:3, px: 4, bg:'base'}, props)}>{props.children}</Button>
)