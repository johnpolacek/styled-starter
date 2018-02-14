import React, { Component } from 'react';
import { Button } from 'styled-system-html';
import system from 'system-components';

export default (props) => (
	<Button bg="gray" disabled>{props.children}</Button>
)