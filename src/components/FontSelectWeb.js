import { Select } from 'styled-system-html'
import { webfonts } from '../_Themes'

export default (props) => (
	<Select id="selectWebFont" onChange={(e) => props.setWebFont({embed:e.target.value,name:e.target.options[e.target.selectedIndex].text})}>
        <option value=''>Web Fonts...</option>
        <option disabled> </option>
        <option disabled>────────── sans-serif</option>
        {
            Object.keys(webfonts.sans).map((fontName) => {
                return <option key={fontName} value={webfonts.sans[fontName]}>{fontName}</option>
            })
        }
        <option disabled>────────── serif</option>
        {
            Object.keys(webfonts.serif).map((fontName) => {
                return <option key={fontName} value={webfonts.serif[fontName]}>{fontName}</option>
            })
        }
    </Select>
)