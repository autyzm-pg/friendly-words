import React, {Component} from 'react';
import Game from "./app/containers/Game"
import {StackNavigator} from "react-navigation";
import {View, Text} from "react-native";
import _ from "lodash";
import {Font} from "expo";
import {FrycekConfig, FrycekTestConfig, AdamConfig, KacperConfig} from "./TEMP_CONFIGS"

function prepareLevels(materials, repetitions, optionsNumber){
	let levels = _.shuffle(_.flatMap(materials, material =>
		_.map(_.range(repetitions),
			() => _.shuffle(_.concat(_.sampleSize(_.reject(materials, material), optionsNumber-1), {name: material.name, images: material.images, isCorrectAnswer: true})))));

	levels = _.map(levels, level => _.map(level, material => ({...material, image: _.sample(material.images)})));
	return _(levels);
}

class GameScreen extends Component {
	state = {
		fontLoaded: false,
	};

	async componentDidMount(){
		await Font.loadAsync({
			'capriola-regular': require('./app/assets/Capriola-Regular.ttf'),
			'Icomoon': require('./app/assets/fonts/icomoon.ttf')
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		const CONFIG = AdamConfig;
		return this.state.fontLoaded &&
			<Game levels={prepareLevels(CONFIG.materials, CONFIG.numberOfRepetitions, CONFIG.picturesNumber)}
		             command={CONFIG.commandText}
		             textRewards={CONFIG.textRewards}
			      shouldShowPicturesLabels={CONFIG.isTextForPicture}
			      shouldReadReward={CONFIG.isReadingRewards}
			      shouldReadCommand={CONFIG.isReadingCommands}
			/>
	}
}

export default App = StackNavigator(
	{
		Home: {screen: GameScreen},
		Game: {screen: GameScreen}
	},
	{
		headerMode: "none"
	});
