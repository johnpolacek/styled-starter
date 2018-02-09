import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

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
          <title>My page</title>
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
