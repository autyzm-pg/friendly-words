import React, {Component} from "react"
import {View, StyleSheet, StatusBar, Text, Easing} from "react-native"
import BorderedButton from "../components/ui/BorderedButton";
import Options from "../components/game/Options";
import Command from "../components/game/Command";
import _ from "lodash";
import {speak} from '../services/speaker';

export default class PlayScreen extends Component {
	constructor(props){
		super(props);
		this.readCommand = this.readCommand.bind(this);
		this.showOptions = this.showOptions.bind(this);
		this.state = {shouldShowOptions: false}
	}

	readCommand(options={}){
		speak(_.replace(this.props.command, '{slowo}', this.props.correctWord), options);
	}

	showOptions() {
		this.setState({shouldShowOptions: true});
	}

	componentWillMount(){
		this.props.shouldReadCommand
			? this.readCommand({onDone: this.showOptions})
			: _.delay(this.showOptions, 500);
	}

	render(){
		const materials = this.props.shouldShowPicturesLabels || true ? this.props.words : _.map(this.props.words, word => _.omit(word, 'name'));

		return <View style={styles.playSceneContainer}>
			<View style={styles.topbar}>
				<BorderedButton icon="left-arrow" title="odtwórz polecenie" onPress={()=>{}}/>
				<BorderedButton icon="sound" title="odtwórz polecenie" onPress={()=>this.readCommand()}/>
			</View>
			<View style={{alignSelf: "stretch", flex: 1, justifyContent: 'center', alignItems:'center'}}>
			<Command text={this.props.command} word={this.props.correctWord}/>
			{ ( this.state.shouldShowOptions || true ) && <Options materials={materials}
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
