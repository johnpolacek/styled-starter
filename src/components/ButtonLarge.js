import React, { Component } from 'react';
import { Button } from 'styled-system-html';
import system from 'system-components';

export default (props) => (
	<Button {...Object.assign({}, {f:3, py:3, px: 4, bg:'base'}, props)}>{props.children}</Button>
)