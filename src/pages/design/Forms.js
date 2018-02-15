import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box, Form, Label, Input, TextArea, Select, Legend, InputSubmit } from 'styled-system-html';
import Section from '../../components/Section'
import Heading from '../../components/Heading'
import Link from '../../components/Link'
import CodeSpecimen from '../../components/CodeSpecimen'

const scope = { Flex, Box, Form, Label, Input, TextArea, Select, Legend, InputSubmit };

export default (props) => (
	<ThemeProvider theme={props.theme}>
		<Box p={4} mx={1}>
			<Box pt={3} px={2} mw="960px">
				<Section>
	    			<Heading>Stacked Form</Heading>
					<CodeSpecimen f="12px" code={`<Form pt={2} pb={5}>
	<Box pb={3}>
		<Box pb={1}>
			<Label for="textInput">Text Input Label</Label>
		</Box>
		<Input type="text" name="textInput" id="textInput" />
	</Box>
	<Box pb={3}>
		<Box pb={1}>
			<Label for="select" mr={2}>Select Label</Label>
		</Box>
		<Select value="" name="select" id="select">
			<option value="">Please select..</option>
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<option value="option3">Option 3</option>
		</Select>
	</Box>
	<Box pb={3}>
		<Box pb={1}>
			<Label for="textArea">Text Area Label</Label>
		</Box>
		<TextArea w={1} name="textArea" id="textArea" />
	</Box>
	<Box pb={3}>
		<Box pb={2}>
			<Legend mr={2}>Radio Buttons</Legend>
		</Box>
		<Box w={1}>
			<Label for="radio1" mr={3}>
				<Input type="radio" name="radio" id="radio1" />
				Radio 1
			</Label>
			<Label for="radio2" mr={3}>
				<Input type="radio" name="radio" id="radio2" />
				Radio 2
			</Label>
			<Label for="radio3" mr={3}>
				<Input type="radio" name="radio" id="radio3" />
				Radio 3
			</Label>
		</Box>
	</Box>
	<Box py={3}>
		<Label for="checkbox" mr={2}>
			<Input type="checkbox" name="check" id="check" /> 
			Checkbox Input Label
		</Label>
	</Box>
	<Box py={3}>
		<InputSubmit bg="base" type="submit" value="Submit" />
	</Box>
</Form>`} scope={scope} />
	    		</Section>
			</Box>

			<Box pt={3} px={2} mw="960px">
				<Section>
	    			<Heading>Responsive Inline Form</Heading>
					<CodeSpecimen f="12px" code={`<Form pt={2} pb={5}>
	<Flex align="flex-start" wrap="wrap" pb={3}>
		<Box w={[1,1/3]} py={1} textAlign={['left','right']}>
			<Label for="textInput" mr={2}>Text Input</Label>
		</Box>
		<Box w={[1,2/3]}>
			<Input type="text" name="textInput" id="textInput" />
		</Box>
	</Flex>
	<Flex align="flex-start" wrap="wrap" pb={3}>
		<Box w={[1,1/3]} py={1} textAlign={['left','right']}>
			<Label for="select" mr={2}>Select</Label>
		</Box>
		<Box w={[1,2/3]}>
			<Select value="" name="select" id="select">
				<option value="">Please select..</option>
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
			</Select>
		</Box>
	</Flex>
	<Flex align="flex-start" wrap="wrap" pb={3}>
		<Box w={[1,1/3]} py={1} textAlign={['left','right']}>
			<Label for="textArea" mr={2}>Text Area</Label>
		</Box>
		<Box w={[1,2/3]}>
			<TextArea w={1} name="textArea" id="textArea" />
		</Box>
	</Flex>
	<Flex align="flex-start" wrap="wrap" pb={3}>
		<Box w={[1,1/3]} py={1} textAlign={['left','right']}>
			<Legend mr={2}>Radio Buttons</Legend>
		</Box>
		<Box w={[1,2/3]}>
			<Label for="radio1" mr={3}>
				<Input type="radio" name="radio" id="radio1" /> 
				Radio 1
			</Label>
			<Label for="radio2" mr={3}>
				<Input type="radio" name="radio" id="radio2" /> 
				Radio 2
			</Label>
			<Label for="radio3" mr={3}>
				<Input type="radio" name="radio" id="radio3" /> 
				Radio 3
			</Label>
		</Box>
	</Flex>
	<Flex align="flex-start" wrap="wrap" pb={3}>
		<Box ml={[0,'33.33%']} w={[1]}>
			<Label for="checkbox" mr={2}>
				<Input type="checkbox" name="check" id="check" /> 
				Checkbox Input
			</Label>
		</Box>
	</Flex>
	<Flex align="flex-start" wrap="wrap" py={3}>
		<Box ml={[0,'33.33%']} w={[1]}>
			<InputSubmit bg="base" type="submit" value="Submit" />
		</Box>
	</Flex>
</Form>`} scope={scope} />
	    		</Section>
			</Box>
		</Box>
	</ThemeProvider>
)