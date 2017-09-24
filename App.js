import React, {Component} from 'react';
import Game from "./app/containers/Game"
import {StackNavigator} from "react-navigation";
import {View, Text} from "react-native";
import _ from "lodash";
import {Font} from "expo";

const images = {
	pilka1: require("./app/assets/ball.png"),
	pilka2: require("./app/assets/ball1.jpg"),
	pilka3: require("./app/assets/ball2.jpg"),

	cat1: require("./app/assets/cat1.jpg"),
	cat2: require("./app/assets/cat3.jpg"),

	dog1: require("./app/assets/dog1.jpg"),
	dog2: require("./app/assets/dog2.jpg"),
	dog3: require("./app/assets/dog3.jpg"),

	doll: require("./app/assets/doll1.jpeg")
};

const CONFIG = {
	materials: [
		{
			name: "piłka",
			images: [images.pilka1, images.pilka2, images.pilka3]
		},
		{
			name: "kotek",
			images: [images.cat1, images.cat2]
		},
		{
			name: "piesek",
			images: [images.dog1, images.dog2, images.dog3]
		},
		{
			name: "lalka",
			images: [images.doll]
		}
	],

	hintType: ["fade"],
	picturesNumber: 3,
	isTextForPicture: true,
	isReadingCommands: false,
	showHintAfter: 10,
	commandText: "Pokaż gdzie jest {slowo}",
	numberOfRepetitions: 2,
	textRewards: ["Super", "Dobrze Ci idzie!", "Tak"],
	isReadingRewards: false,
};

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
