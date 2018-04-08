import React, {Component} from 'react';
import Game from "./app/containers/Game"
import {StackNavigator} from "react-navigation";
import {View, Text} from "react-native";
import _ from "lodash";
import {Font, Asset, AppLoading} from "expo";
import {FrycekConfig, FrycekTestConfig, AdamConfig, KacperConfig} from "./TEMP_CONFIGS"
import MainScreen from "./app/containers/MainScreen";
import images from "./TEMP_IMAGES";
import {readActiveConfig} from "./app/services/db/configs"

function prepareLevels(materials, repetitions, optionsNumber) {
	let levels = _.shuffle(_.flatMap(materials, material =>
		_.map(_.range(repetitions),
			() => _.shuffle(_.concat(_.sampleSize(_.reject(materials, material), optionsNumber - 1), {
				name: material.name,
				images: material.images,
				isCorrectAnswer: true
			})))));

	levels = _.map(levels, level => _.map(level, material => ({...material, image: _.sample(material.images)})));
	return _(levels);
}

const GameScreen = ({navigation}) => {
	const CONFIG = navigation.state.params.config;
	return (
		<Game levels={prepareLevels(CONFIG.materials, CONFIG.numberOfRepetitions, CONFIG.picturesNumber)}
		      command={CONFIG.commandText}
		      textRewards={CONFIG.textRewards}
		      shouldShowPicturesLabels={CONFIG.isTextForPicture}
		      shouldReadReward={CONFIG.isReadingRewards}
		      shouldReadCommand={CONFIG.isReadingCommands}
		      showHintAfter={CONFIG.showHintAfter}
		      goToMainScreen={() => navigation.goBack()}
		/>
	)
};


const AppNavigator = StackNavigator(
	{
		Home: {screen: MainScreen},
		Game: {screen: GameScreen}
	},
	{
		headerMode: "none"
	});


function cacheImages(images) {
	return images.map(image => {
		if (typeof image === 'string') {
			return Image.prefetch(image);
		} else {
			return Asset.fromModule(image).downloadAsync();
		}
	});
}

function cacheFonts(fonts) {
	return fonts.map(font => Font.loadAsync(font));
}


export default class App extends React.Component {
	state = {
		fontLoaded: false,
	};

	async loadAssets() {
		const loadingImages = cacheImages(_.values(images));

		const loadingFonts = cacheFonts([{
			'capriola-regular': require('./app/assets/Capriola-Regular.ttf'),
			'Icomoon': require('./app/assets/fonts/icomoon.ttf')
		}]);

		await Promise.all([
			...loadingImages,
			...loadingFonts
		])

		const activeConfig = await readActiveConfig()
		console.log("Active config: ", activeConfig);

		console.log("Loaded all assets")
	}

	async componentDidMount() {
		await this.loadAssets();
		this.setState({assetsLoaded: true});
	}

	render() {
		return !this.state.assetsLoaded ? <AppLoading/> : <AppNavigator/>
	}
}
