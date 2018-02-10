import React, { Component } from 'react';
import { H3 } from 'styled-system-html';

export default (props) => (
	<H3 pb={3}>{props.children}</H3>
)