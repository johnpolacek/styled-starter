import Button from './Button'

export default (props) => (
	<Button bg='none' borderColor={props.color || 'base'} border='1px solid' color='base' {...props}>{props.children}</Button>
)