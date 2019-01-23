import React from 'react';
import { StyleSheet, Image, View, ImageBackground } from 'react-native';
import NextQuoteButton from './NextQuoteButton'
import Quote from './Quote'
import PropTypes from 'prop-types';

const bgImage = require('./assets/background2.png')
export default class QuoteScreen extends React.Component {
	render() {
		return (
			<ImageBackground source={bgImage} style={styles.backgroundContainer}>
				<View style={styles.container}>
					<Quote quoteText={this.props.text} />
					<NextQuoteButton onPress={this.props.onNextQuotePress}/>
				</View>
			</ImageBackground>
		)
	}
}

QuoteScreen.propTypes = {
	text: PropTypes.string.isRequired,
	onNextQuotePress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
	backgroundContainer: {
		flex: 1,
		resizeMode:'cover',
		width: undefined,
		height: undefined
	},

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},


});