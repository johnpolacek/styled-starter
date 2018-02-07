import Styleguide 	from '../src/Styleguide'
import Page			from '../src/containers/Page'

export default class extends React.Component {
	render (props) {
	    return <Page prefix="..">
	    	<Styleguide />
	    </Page>
  	}
}
