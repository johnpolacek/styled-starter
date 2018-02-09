import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Box, H3, Text, Select } from 'styled-system-html';

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

class EditThemeModal extends Component {
	constructor () {
		super();
	}

	render() {
	    return (
	    	<Modal onRequestClose={this.props.onClose} isOpen={true} contentLabel="Edit Theme Modal" style={styles} shouldCloseOnOverlayClick={true}>
				<Box p={4}>
					<Box onClick={this.props.onClose} f={2} py={2} px={3} position="absolute" style={{right:0,top:0,cursor:'pointer'}}>&times;</Box>
					<H3 pb={3}>Edit Theme</H3>
					<Box>
						<Text pb={2}>Choose a theme to apply:</Text>
						<Select onChange={this.props.onSelectTheme} style={{display:'inline-block', padding:'8px'}} w={160}>
                            {
                            	Object.keys(Object.assign({'Select...':''},this.props.themes)).map(
                            		(theme) => <option key={theme} value={this.props.themes[theme] && theme}>{theme}</option>
                            	)
                           	}
                        </Select>
					</Box>
				</Box>
			</Modal>
	    );
	}
}

EditThemeModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    
    themes: PropTypes.object.isRequired,
}

export default EditThemeModal;
