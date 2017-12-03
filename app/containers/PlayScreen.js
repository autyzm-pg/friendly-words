import React, {Component} from "react"
import {View, StyleSheet, StatusBar, Text, Easing} from "react-native"
import Options from "../components/game/Options";
import Command from "../components/game/Command";
import _ from "lodash";
import {speak} from '../services/speaker';
import ReadingCommandButton from "../components/game/ReadingCommandButton";

export default class PlayScreen extends Component {
	constructor(props){
		super(props);
		this.showOptions = this.showOptions.bind(this);

		this.readableCommand = _.replace(this.props.command, '{slowo}', this.props.correctWord);
		this.state = {shouldShowOptions: false, incorrectAnswers: 0}
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
				<View style={styles.commandButtonPositioning}>
					<ReadingCommandButton command={this.readableCommand} />
				</View>
				<Command text={this.props.command} word={this.props.correctWord}/>

			</View>
			<View style={styles.optionsContainer}>
			{ this.state.shouldShowOptions && <Options materials={materials}
													   onCorrect={() => this.props.onCorrectAnswer(this.state.incorrectAnswers)}
													   onIncorrect={()=> this.setState({incorrectAnswers: this.state.incorrectAnswers+1})}
													   showHintAfter={this.props.showHintAfter}/>}
			</View>
		</View>;
	}
}

const variables = {
	horizontalGutter: 50,
	verticalGutter: 10
};
const styles = StyleSheet.create({
	playSceneContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	optionsContainer: {
		alignSelf: "stretch",
		flex: 1,
		justifyContent: 'center',
		alignItems:'center'
	},

	commandButtonPositioning: {
		position: "absolute",
		left: variables.horizontalGutter,
		top: variables.verticalGutter/2
	},

	topbar: {
		position: "relative",
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "center",
		paddingHorizontal: variables.horizontalGutter,
		paddingVertical: variables.verticalGutter,
		marginTop: variables.horizontalGutter/2
	}
});


