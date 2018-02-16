import Head from 'next/head'

export default (props) => (
	<Head>
    	<meta charSet="utf-8" />
    	<link rel="mask-icon" href={props.prefix + '/static/favicon.svg'} />
    	<link rel="icon" type="image/x-icon" className="js-site-favicon" href={props.prefix + '/static/favicon.ico'} />
	    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
	    <meta name="theme-color" content="#000000" />
	    <title>Styled Starter | Starter Kit with React, Next.js and Styled Components</title>
	    <link href="https://fonts.googleapis.com/css?family=Nunito:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
    </Head>
)
