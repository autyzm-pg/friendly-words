import React, {Component} from "react";
import {View, Text, Animated, StyleSheet} from "react-native";
import WordCard from "../components/ui/WordCard";
import CapriolaText from "../components/ui/CapriolaText"
import _ from "lodash";
import {speak} from '../services/speaker';
import BorderedButton from "../components/ui/BorderedButton";
import colors from "../assets/colours";
import Icon from "../components/ui/Icon";

class RewardScreen extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.shouldReadReward
			? speak(`${this.props.textReward} ${this.props.word.name}`)
			: _.noop();
	}

	render() {
		return <View style={styles.container}>

			<Icon style={{opacity: 0.8}} size={70} color={"white"} name={`happy-${_.random(1, 5)}`}/>
			<CapriolaText style={styles.text}>{this.props.textReward}</CapriolaText>
			<WordCard text={this.props.word.name} imageUrl={this.props.word.image}/>
			<BorderedButton onPress={this.props.onPress} title="przejdź dalej"/>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		flex: 1
	},

	text: {
		fontSize: 30,
		color: colors.white
	}
});

export default RewardScreen;