import 'src/ui/Bulletproof.css'
import 'src/App.css'
import Element from 'src/ui/Element'

class ui extends Element {

	render() {
		return`
			plugin scaffold
		`
	}
}

customElements.define('root-ui', ui)
