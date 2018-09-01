import Button from './Button';

export default (props) => (
	<Button fontSize={0} py={1} px={2} bg='base' {...props}>{props.children}</Button>
)