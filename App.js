import React from 'react';
import Game from "./app/containers/Game"
import {StackNavigator} from "react-navigation";
import MainScreen from './app/containers/MainScreen';
import RewardScreen from './app/containers/RewardScreen';
import _ from "lodash";

const CONFIG = {
	materials: [
		{
			name: "piłka",
			images: ["https://images-eu.ssl-images-amazon.com/images/I/816a0-Nu6TL._SY355_.jpg",
				"http://images.clipartpanda.com/ball-clipart-soccer-ball.jpg"]
		},
		{
			name: "arbuz",
			images: ["https://img.memecdn.com/nigga-science_o_692878.jpg",
				"http://polki.pl/foto/4_3_SMALL/pomysly-na-arbuza-159937.jpg",
				"http://www.niam.pl/rimages/crop/600/450/files/images/PRODUCT/BACKUP/63845620617_zccpfwcewjikqqpkquzo.jpg"
			]
		},
		{
			name: "kurczak",
			images: ["https://img.memecdn.com/just-a-nigga-with-his-chicken_gp_1489329.jpg"]
		}
	],
	hintType: ["wyszarz", "dupa"],
	picturesNumber: 3,
	isTextForPicture: true,
	isReadingCommands: true,
	showHintAfter: 2,
	commandText: "Pokaż gdzie jest {slowo}",
	numberOfRepetitions: 3,
	textRewards: ["Super", "Dobrze Ci idzie!", "Tak", "O kurwa", "śmigaj dzieciaku"],
	isReadingRewards: true,
};

function replicateMaterials(materials, n){
	return _.flatMap(
		_.map(materials, material =>
			_.map(_.range(n), () => {return {name: material.name, image: _.sample(material.images)}})))
}

const GameScreen = () => {
	return <Game materials={replicateMaterials(CONFIG.materials, CONFIG.numberOfRepetitions)} command={CONFIG.commandText} picturesNumber={CONFIG.picturesNumber}
	             textReward={CONFIG.textRewards} />
};

export default App = StackNavigator(
	{
		Home: {screen: MainScreen},
		Game: {screen: GameScreen}
	},
	{
		headerMode: "none"
	});
