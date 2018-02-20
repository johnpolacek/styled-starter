import { Button } from 'styled-system-html';

export default (props) => (
	<Button {...Object.assign({}, {bg:'base'}, props)}>{props.children}</Button>
)