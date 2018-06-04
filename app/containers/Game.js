import React, {Component} from "react"
import {View, Button, StyleSheet, StatusBar, Animated, Text, Easing, LayoutAnimation} from "react-native"
import {RewardScreen, ReinforcingScreen} from "../containers/RewardScreen";
import _ from "lodash";
import PlayScreen from "../containers/PlayScreen";
import {FullBackground} from "../components/ui/FullBackground";

class SummaryScreen extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return <View>
			<Button title="Play again" onPress={this.props.onAccept}/>
		</View>
	}
}

const GAME_STATES = {
	reward: "reward",
	reinforce: "reinforce",
	play: "play",
	summary: "summary"
};

export const Layout = ({children}) =>
	<FullBackground backgroundSrc={require("../assets/images/triangles.png")}>
		{children}
	</FullBackground>;

export default class Game extends Component {

	constructor(props) {
		super(props);
		this.setNextLevel = this.setNextLevel.bind(this);
		this.showReward = this.showReward.bind(this);
		this.repeatLevel = this.repeatLevel.bind(this);
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

	showReinforce(){
		this.setState({gameState: GAME_STATES.reinforce})
	}

	findCorrectAnswer(){
		return _.find(this.state.words, 'isCorrectAnswer');
	}

	repeatLevel(){
		this.setState({gameState: GAME_STATES.play})
	}

	onLevelFinished = (incorrectAnswers) => {
		incorrectAnswers > 0
			? this.showReinforce()
			: this.showReward();
	}

	getActiveScreen(){
		const correctWord = this.findCorrectAnswer();
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        switch (this.state.gameState) {
            case GAME_STATES.reward:
                return <RewardScreen word={correctWord}
									 onPress={this.setNextLevel}
									 onPrevPress={this.repeatLevel}
									 textReward={_.sample(this.props.textRewards)}
									 shouldReadReward={this.props.shouldReadReward}/>;
                break;
            case GAME_STATES.reinforce:
                return <ReinforcingScreen word={correctWord}
										onPress={this.setNextLevel}
										onPrevPress={this.repeatLevel}
										textReward={_.sample(this.props.textRewards)}
										shouldReadReward={this.props.shouldReadReward}/>;
                break;
            case GAME_STATES.play:
                return <PlayScreen command={this.props.command}
								   words={this.state.words}
								   correctWord={correctWord.name}
								   shouldShowPicturesLabels={this.props.shouldShowPicturesLabels}
								   shouldReadCommand={this.props.shouldReadCommand}
								   onCorrectAnswer={this.props.isTestMode ? this.setNextLevel : this.onLevelFinished}
								   onIncorrectAnswer={this.props.isTestMode ? this.setNextLevel : _.noop()}
								   isTestMode={this.props.isTestMode}
								   showHintAfter={!this.props.isTestMode ? this.props.showHintAfter : null}
								   timeForAnswer={this.props.isTestMode ? this.props.timeForAnswer : null}
				/>;
                break;
            case GAME_STATES.summary:
                return <SummaryScreen onAccept={this.props.goToMainScreen}/>;
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


