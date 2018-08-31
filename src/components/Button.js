import { Button } from 'styled-system-html';

export default (props) => (
	<Button bg='base' color='white' px={3} py={2} borderRadius='4px' border='none' fontSize={1} {...props}>{props.children}</Button>
)