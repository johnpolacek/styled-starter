import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

// console.log('document theme: '+this.props.theme);

// Global style
// eslint-disable-next-line
injectGlobal`
  html{box-sizing:border-box;} *,*:before,*:after{box-sizing:inherit;} 
  body{margin:0;font-family:'Nunito',sans-serif;line-height:1.6;} 
  button,input[type=submit]{cursor:pointer;font-family:inherit;}
  p{line-height:1.5;}
  select{padding:8px;}
  h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{text-rendering:optimizelegibility;margin:0;}
  input,select,textarea{padding:4px;border-radius:4px;border:solid 1px #ccc;font-size:16px;font-family:inherit;}
  select{-webkit-appearance:menulist;height:32px;}
  table{border-collapse:collapse;}
  .ReactModalPortal > div {opacity:0;}
  .ReactModalPortal .ReactModal__Overlay {
    transition: opacity 200ms ease-in-out;
    &--after-open {opacity:1;}
    &--before-close {opacity:0;}
  }
  .ReactModalPortal .ReactModal__Content {
    transition: margin-top 200ms ease-in-out;
    background: rgba(0, 0, 0, 0.15);
    &--after-open {margin-top:-20px;}
    &--before-close {margin-top:200px;}
  }
`
