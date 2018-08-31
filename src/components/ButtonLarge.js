import Button from './Button';

export default (props) => (
	<Button fontSize={3} py={3} px={4} {...props}>{props.children}</Button>
)