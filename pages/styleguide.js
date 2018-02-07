import Styleguide 	from '../src/Styleguide'
import Page			from '../src/containers/Page'

export default class extends React.Component {
	static getInitialProps ({ query: { id } }) {
    	return { id }
  	}

  	render () {
	    return <Page>
	    	<Styleguide section={this.props.id} />
	    </Page>
  	}
}
