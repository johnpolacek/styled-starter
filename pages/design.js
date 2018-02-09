import Design 	from '../src/pages/Design'
import Page			from '../src/containers/Page'

export default class extends React.Component {
	render (props) {
	    return <Page name="Design" prefix="..">
	    	<Design />
	    </Page>
  	}
}