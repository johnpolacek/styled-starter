import Button from './Button';

export default (props) => (
	<Button is="a" {...props}>{props.children}</Button>
)