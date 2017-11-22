import React, {Component} from "react";
import {View, Text, Dimensions, StyleSheet, } from "react-native";
import WordCard from "../components/ui/WordCard";
import CapriolaText from "../components/ui/CapriolaText"
import _ from "lodash";
import {speak} from '../services/speaker';
import BorderedButton from "../components/ui/BorderedButton";
import colors from "../assets/colours";
import Icon from "../components/ui/Icon";
import {width} from "../services/deviceInfo";
import AnimatedBalloons from "../components/animations/AnimatedBalloons";

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
			<CapriolaText style={styles.text}>{this.props.word.name}</CapriolaText>

			<WordCard imageUrl={this.props.word.image} cardSize={width/3} />
			<AnimatedBalloons/>

			<View style={styles.topbar}>
				<BorderedButton icon="left-arrow" color="red" title="odtwórz polecenie" onPress={this.props.onPrevPress}/>
				<BorderedButton icon="right-arrow" color="green" onPress={this.props.onPress} title="przejdź dalej"/>
			</View>
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
		fontSize: 40,
		color: colors.white
	},

	topbar: {
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-between",
		paddingHorizontal: 50,
		paddingVertical: 10
	}
});

export default RewardScreen;