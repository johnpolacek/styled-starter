import React, { Component } from 'react';
import { Button } from 'styled-system-html';
import system from 'system-components';

export default (props) => (
	<Button {...Object.assign({}, {bg:'none', borderColor: props.color || 'base', borderWidth: '1px', color: 'base'}, props)}>{props.children}</Button>
)