import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import StartScreen from './StartScreen';
import QuoteScreen from './QuoteScreen';

const { quotes } = require('./quotes.json');
export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			quoteIndex: 0,
		}

		this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this)
	}

	_incrementQuoteIndex() {
		let newIndex

		if (this.state.quoteIndex + 1 === quotes.length) {
			newIndex = 0
		} else {
			newIndex = this.state.quoteIndex + 1
		}

		this.setState({
			quoteIndex: newIndex,
		})
	}

  render() {
	  const quote = quotes[this.state.quoteIndex];
    return (
			<NavigationExperimental.Navigator
				initialRoute={{ name:'StartScreen'}}
				renderScene={(route, navigator) => {
					switch (route.name) {
						case 'StartScreen':
							return <StartScreen onStartHandler={() => navigator.push({ name: 'QuoteScreen'})}/>
						case 'QuoteScreen':
							return <QuoteScreen text={quote.text} onNextQuotePress={this._incrementQuoteIndex}/>
					}
				}}
			/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
