import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Div, Form, Label, Input, Span, TextArea, Select, Legend } from 'styled-system-html';
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import InputSubmit from '../../components/InputSubmit'
import Link from '../../components/Link'
import CodeSpecimen from '../../components/CodeSpecimen'

const scope = { Flex, Box, Div, Form, Label, Input, Span, TextArea, Select, Legend, InputSubmit };

export default (props) => (
	<Div>
		<Section>
			<Heading>Stacked Form</Heading>
				<CodeSpecimen f="12px" code={`<Form pt={2} pb={5}>
	<Div pb={3}>
		<Div pb={1}>
			<Label htmlFor="textInput">Text Input Label</Label>
		</Div>
		<Input type="text" name="textInput" id="textInput" />
	</Div>
	<Div pb={3}>
		<Div pb={1}>
			<Label htmlFor="select" mr={2}>Select Label</Label>
		</Div>
		<Select value="" name="select" id="select">
			<option value="">Please select..</option>
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<option value="option3">Option 3</option>
		</Select>
	</Div>
	<Div pb={3}>
		<Div pb={1}>
			<Label htmlFor="textArea">Text Area Label</Label>
		</Div>
		<TextArea width={1} name="textArea" id="textArea" />
	</Div>
	<Div pb={3}>
		<Div pb={2}>
			<Legend mr={2}>Radio Buttons</Legend>
		</Div>
		<Div width={1}>
			<Label htmlFor="radio1" mr={3}>
				<Input type="radio" name="radio" id="radio1" />
				<Span px={1}>Radio 1</Span>
			</Label>
			<Label htmlFor="radio2" mr={3}>
				<Input type="radio" name="radio" id="radio2" />
				<Span px={1}>Radio 2</Span>
			</Label>
			<Label htmlFor="radio3" mr={3}>
				<Input type="radio" name="radio" id="radio3" />
				<Span px={1}>Radio 3</Span>
			</Label>
		</Div>
	</Div>
	<Div py={3}>
		<Label htmlFor="checkbox" mr={2}>
			<Input type="checkbox" name="check" id="check" /> 
		Checkbox Input Label
		</Label>
	</Div>
	<Div py={3}>
		<InputSubmit bg="base" type="submit" value="Submit" />
	</Div>
</Form>`} scope={scope} />
		</Section>
		<Section>
			<Heading>Responsive Inline Form</Heading>
			<CodeSpecimen f="12px" code={`<Form pt={2} pb={5}>
	<Flex alignItems="flex-start" flexWrap="wrap" pb={3}>
		<Box width={[1,1/3]} py={1}>
			<Label textAlign={['left','right']} htmlFor="textInput" mr={2}>Text Input</Label>
		</Box>
		<Box width={[1,2/3]}>
			<Input type="text" name="textInput" id="textInput" />
		</Box>
	</Flex>
	<Flex alignItems="flex-start" flexWrap="wrap" pb={3}>
		<Box width={[1,1/3]} py={1} textAlign={['left','right']}>
			<Label htmlFor="select" mr={2}>Select</Label>
		</Box>
		<Box width={[1,2/3]}>
			<Select value="" name="select" id="select">
				<option value="">Please select..</option>
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
			</Select>
		</Box>
	</Flex>
	<Flex alignItems="flex-start" flexWrap="wrap" pb={3}>
		<Box width={[1,1/3]} py={1} textAlign={['left','right']}>
			<Label htmlFor="textArea" mr={2}>Text Area</Label>
		</Box>
		<Box width={[1,2/3]}>
			<TextArea width={1} name="textArea" id="textArea" />
		</Box>
	</Flex>
	<Flex alignItems="flex-start" flexWrap="wrap" pb={3}>
		<Box width={[1,1/3]} py={1} textAlign={['left','right']}>
			<Legend mr={2}>Radio Buttons</Legend>
		</Box>
		<Box width={[1,2/3]}>
			<Label htmlFor="radio1" mr={3}>
				<Input type="radio" name="radio" id="radio1" /> 
				Radio 1
				</Label>
			<Label htmlFor="radio2" mr={3}>
				<Input type="radio" name="radio" id="radio2" /> 
				Radio 2
			</Label>
			<Label htmlFor="radio3" mr={3}>
				<Input type="radio" name="radio" id="radio3" /> 
				Radio 3
			</Label>
		</Box>
	</Flex>
	<Flex alignItems="flex-start" flexWrap="wrap" pb={3}>
		<Box ml={[0,'33.33%']} width={[1]}>
			<Label htmlFor="checkbox" mr={2}>
				<Input type="checkbox" name="check" id="check" /> 
				Checkbox Input
		</Label>
		</Box>
	</Flex>
	<Flex alignItems="flex-start" flexWrap="wrap" py={3}>
		<Box ml={[0,'33.33%']} width={[1]}>
			<InputSubmit bg="base" type="submit" value="Submit" />
		</Box>
	</Flex>
</Form>`} scope={scope} />
		</Section>
	</Div>
)