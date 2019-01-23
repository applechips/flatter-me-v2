import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const heartImage = require('./assets/mail.png')
export default class NextQuoteButton extends React.Component {
	render() {
		return (
			<TouchableOpacity style={styles.button} onPress={this.props.onPress}>

				<Image source={heartImage} style={styles.buttonImage}/>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({

	buttonText: {
		color: 'blue',
		fontSize: 18,
	},
	buttonImage: {
		width: 95,
		height: 95,
		paddingTop: 20,
	}
})

NextQuoteButton.propTypes = {
	onPress: PropTypes.func.isRequired,
}
