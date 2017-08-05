import React, {Component} from "react"
import {View, Text, Button, StyleSheet} from "react-native"
import Options from "../components/game/Options";
import Command from "../components/game/Command";
import RewardScreen from "../containers/RewardScreen";
import _ from "lodash";

export default class Game extends Component {

	constructor(props) {
		super(props);
		this.changeStep = this.changeStep.bind(this);
		this.showReward = this.showReward.bind(this);
		this.state = {materials: this.getRandomMaterials()};
	}

	getRandomMaterials(){
		debugger;
		const materials = _.uniq(_.sampleSize(this.props.materials, this.props.picturesNumber));
		return _.isEqual(materials.length, this.props.picturesNumber)
			? materials
			: this.getRandomMaterials();
	}

	getMaterialsForLevel(){
		return {
			words: _.shuffle(this.getRandomMaterials()),
			correctWord: _.sample(this.materials)
		}
	}

	changeStep(){
		this.setState(this.getMaterialsForLevel());
	}

	showReward(){
		this.setState({isAnswerCorrect: true})
	}

	render() {
		return <View style={styles.container}>
			{ this.state.isAnswerCorrect
				? <RewardScreen textReward="BRAWO NIGGA" word={this.state.correctWord.name}
				                onPress={() => this.setState({isAnswerCorrect: false}, this.changeStep)}/>
				: <View>
					<Command text={this.props.command} word={this.state.correctWord.name}/>
					<Options materials={this.state.words} onCorrect={this.showReward} correct={this.state.correctWord}/>
				</View>
			}
		</View>;
	}
};

const styles = StyleSheet.create({
 container: {
 flex: 1,
 alignItems: 'center',
 justifyContent: 'center',
 backgroundColor: '#becd00',
 }
});

