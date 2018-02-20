import { Button } from 'styled-system-html';

export default (props) => (
	<Button {...Object.assign({}, {f:1, py:1, px: 2, bg:'base'}, props)}>{props.children}</Button>
)