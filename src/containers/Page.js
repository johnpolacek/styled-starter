import { injectGlobal } from 'styled-components';
import App from './App'

export default (props) => (
	<App children={props.children} prefix={props.prefix} name={props.name} />
)

// Global style
// eslint-disable-next-line
injectGlobal`
	html{box-sizing:border-box;} *,*:before,*:after{box-sizing:inherit;} 
	body{margin:0;font-family:'Nunito',sans-serif;line-height:1.6;} 
	button,input[type=submit]{cursor:pointer;}
	p{line-height:1.5;}
	select{padding:8px;}
	h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{text-rendering:optimizelegibility;margin:0;}
	input,select,textarea{padding:4px;border-radius:4px;border:solid 1px #ccc;font-size:16px;font-family:'Nunito',sans-serif;}
	select{-webkit-appearance:menulist;height:32px;}
	table{border-collapse:collapse;}
`