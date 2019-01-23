import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';

const heartImage = require('./assets/heart.png')

export default class StartScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.button} onPress={this.props.onStartHandler}>
					<Image source={heartImage} style={styles.buttonImage}/>
				</TouchableOpacity>
				<Text style={styles.readyText}>Flatter Me!</Text>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffcd30',
	},

	readyText: {
		fontSize: 40,
		fontFamily: (Platform.OS === 'ios')?
			'AvenirNext-Bold' :
			'Roboto',
		fontSize: 40,
	},

	button: {
		padding: 10,
		marginBottom: 20,
	},

	buttonImage: {
		width: 300,
		height: 300
	}

});