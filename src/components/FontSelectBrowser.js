import { Select } from 'styled-system-html'

export default (props) => (
	<Select id="selectBrowserFont" onChange={(e) => props.setFont(e.target.value)}>
        <option value=''>Browser Fonts...</option>
        <option disabled> </option>
        <option disabled>────────── sans-serif</option>
        <option value='Arial, sans-serif'>Arial</option>
        <option value="'avenir next', avenir, helvetica, arial, sans-serif">Avenir</option>
        <option value='"Helvetica Neue", Helvetica, Arial, sans-serif'>Helvetica</option>
        <option value='Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif'>Helvetica Based</option>
        <option value='system-ui,sans-serif'>System</option>
        <option value='Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif'>Tahoma</option>
        <option value='"Trebuchet MS", Verdana, "Verdana Ref", sans-serif'>Trebuchet</option>
        <option value='"Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif'>Trebuchet Based</option>
        <option value='Verdana, "Verdana Ref", sans-serif'>Verdana</option>
        <option value='Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif'>Verdana Based</option>
        <option disabled> </option>
        <option disabled>────────── serif</option>
        <option value=''>Browser Fonts...</option>
        <option value='Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif'>Baskerville</option>
        <option value='"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace'>Courier</option>
        <option value='Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif'>Garamond</option>
        <option value='Georgia, serif'>Georgia</option>
        <option value='Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif'>Georgia Based</option>
        <option value='"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif'>Palatino</option>
        <option value='Times, "Times New Roman", serif'>Times</option>
        <option value='Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif'>Times Based</option>
    </Select>
)