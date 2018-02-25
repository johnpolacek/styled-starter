import connect from 'refunk';
import { updateTheme, enableChooseThemeModal } from '../updaters'
import Modal from 'react-modal';
import { Box, H3, Select } from 'styled-system-html';

const styles = {
	overlay: {
		zIndex: '99999',
		background: 'rgba(122,122,122, 0.5)'
	},
  	content : {
		top : '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		minWidth: '320px',
		padding: 0,
  	}
};

const ChooseThemeModal = (props) => (
	<Modal appElement={document.getElementById('__next')} onRequestClose={() => props.update(enableChooseThemeModal(false))} isOpen={true} contentLabel="Edit Theme Modal" style={styles} shouldCloseOnOverlayClick={true}>
		<Box mw="320px" p={4}>
			<Box id="closeThemeModal" onClick={() => props.update(enableChooseThemeModal(false))} f={2} py={2} px={3} position="absolute" style={{right:0,top:0,cursor:'pointer'}}>&times;</Box>
			<H3 pb={3}>Choose Theme</H3>
			<Box>
				<Select id="selectTheme" onChange={e => props.update(updateTheme(e.target.value))} style={{display:'inline-block', padding:'8px'}} w={160}>
                    {
                    	Object.keys(Object.assign({'Select...':''},props.themes)).map(
                    		(theme) => <option key={theme} value={props.themes[theme] && theme}>{theme}</option>
                    	)
                   	}
                </Select>
			</Box>
		</Box>
	</Modal>
)

export default connect(ChooseThemeModal);
