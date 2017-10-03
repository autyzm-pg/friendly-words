import React, {Component} from "react"
import {View, StyleSheet, StatusBar, Text, Easing} from "react-native"
import BorderedButton from "../components/ui/BorderedButton";
import Options from "../components/game/Options";
import Command from "../components/game/Command";
import _ from "lodash";
import {speak} from '../services/speaker';

class ReadingCommandButton extends Component {
	constructor(props){
		super(props);
		this.toggleAvailability = this.toggleAvailability.bind(this);
		this.readCommand = this.readCommand.bind(this);
		this.state = {
			isAvailable: true
		}
	}

	toggleAvailability(){
		this.setState({isAvailable: !this.state.isAvailable})
	}

	readCommand(){
		const {onStart, onDone, command} = this.props;
		speak(command, {
			onStart: () => {onStart && onStart(); this.toggleAvailability()},
			onDone: () => {onDone && onDone(); this.toggleAvailability()}
		});
	}

	render(){
		return <BorderedButton icon="sound" title="odtwórz polecenie" disabled={!this.state.isAvailable} onPress={()=>this.readCommand()}/>
	}
}
export default class PlayScreen extends Component {
	constructor(props){
		super(props);
		this.showOptions = this.showOptions.bind(this);

		this.readableCommand = _.replace(this.props.command, '{slowo}', this.props.correctWord);
		this.state = {shouldShowOptions: false}
	}

	showOptions() {
		this.setState({shouldShowOptions: true});
	}

	componentWillMount(){
		this.props.shouldReadCommand
			? speak(this.readableCommand, {onDone: this.showOptions})
			: _.delay(this.showOptions, 500);
	}

	render(){
		const materials = this.props.shouldShowPicturesLabels  ? this.props.words : _.map(this.props.words, word => _.omit(word, 'name'));

		return <View style={styles.playSceneContainer}>
			<View style={styles.topbar}>
				<BorderedButton icon="left-arrow" title="odtwórz polecenie" onPress={()=>{}}/>
				<ReadingCommandButton command={this.readableCommand} />
			</View>
			<View style={{alignSelf: "stretch", flex: 1, justifyContent: 'center', alignItems:'center'}}>
			<Command text={this.props.command} word={this.props.correctWord}/>
			{ this.state.shouldShowOptions && <Options materials={materials}
			                                                       onCorrect={this.props.onCorrectAnswer} />}
			</View>
		</View>;
	}
}

const styles = StyleSheet.create({
	playSceneContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	topbar: {
		opacity: 0.8,
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-between",
		paddingHorizontal: 50,
		paddingVertical: 10
	}
});
