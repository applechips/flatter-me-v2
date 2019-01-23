import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import PropTypes from 'prop-types';


export default class Quote extends React.Component {
	render(){
		return(
			<View>
				<Text style={styles.quoteText}>{this.props.quoteText}</Text>
			</View>
		)
	}
}
Quote.propTypes = {
	quoteText: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
	quoteText: {
		fontFamily: (Platform.OS === 'ios')?
			'AvenirNext-Bold' :
			'Roboto',
		fontSize: 40,
		marginVertical: 30,
		marginHorizontal: 25,
	}
})