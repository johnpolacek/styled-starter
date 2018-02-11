import React, { Component } from 'react';
import { Section } from 'styled-system-html';

export default (props) => (
	<Section pb={4}>{props.children}</Section>
)