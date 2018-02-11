import React, { Component } from 'react';
import { A } from 'styled-system-html';

export default (props) => (
	<A href={props.href} color="blue">{props.children}</A>
)