import { Input } from 'styled-system-html';

export default (props) => (
	<Input type="submit" {...Object.assign({}, {bg:'base',color:'white',px:3,py:2,border:'none'}, props)}>{props.children}</Input>
)