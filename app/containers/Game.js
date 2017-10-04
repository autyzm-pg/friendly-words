import React, {Component} from "react"
import {View, Button, StyleSheet, StatusBar, Animated, Text, Easing, LayoutAnimation} from "react-native"
import RewardScreen from "../containers/RewardScreen";
import _ from "lodash";
import CapriolaText from "../components/ui/CapriolaText";
import PlayScreen from "../containers/PlayScreen";
import { LinearGradient } from 'expo';
import Colours from "../assets/colours";

class SummaryScreen extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return <View><CapriolaText>jeszcze raz</CapriolaText></View>
	}
}

const GAME_STATES = {
	reward: "reward",
	play: "play",
	summary: "summary"
};

export const Layout = ({children}) => (
	<View style={styles.container}>
		{children}
	</View>
)


export default class Game extends Component {

	constructor(props) {
		super(props);
		this.setNextLevel = this.setNextLevel.bind(this);
		this.showReward = this.showReward.bind(this);
		this.findCorrectAnswer = this.findCorrectAnswer.bind(this);
		this.state = {gameState: GAME_STATES.play, words: this.props.levels.next().value}
	}

	setNextLevel() {
		const level = this.props.levels.next();

		level.done
			? this.setState({gameState: GAME_STATES.summary})
			: this.setState({gameState: GAME_STATES.play, words: level.value});
	}

	showReward() {
		this.setState({gameState: GAME_STATES.reward})
	}

	findCorrectAnswer(){
		return _.find(this.state.words, 'isCorrectAnswer');
	}

	getActiveScreen(){
		const correctWord = this.findCorrectAnswer();
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

		switch (this.state.gameState) {
			case GAME_STATES.reward:
				return <RewardScreen word={correctWord}
				                     onPress={this.setNextLevel}
				                     textReward={_.sample(this.props.textRewards)}
									shouldReadReward={this.props.shouldReadReward}/>;
			case GAME_STATES.play:
				return <PlayScreen command={this.props.command}
				                   words={this.state.words}
				                   correctWord={correctWord.name}
				                   shouldShowPicturesLabels={this.props.shouldShowPicturesLabels}
				                   shouldReadCommand={this.props.shouldReadCommand}
				                   onCorrectAnswer={this.showReward}/>;
				break;
			case GAME_STATES.summary:
				return <SummaryScreen />;
				break;
		}
	}

	render() {
		return <Layout>
			<StatusBar hidden={true} />
			{this.getActiveScreen()}
		</Layout>;
	}
};

const styles = StyleSheet.create({
 container: {
 	backgroundColor: Colours.easternBlue,
	 flex: 1
 }
});



