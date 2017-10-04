import React, {Component} from "react";
import {View, Text, Animated, Easing, StyleSheet, Dimensions} from "react-native";
import WordCard from "../components/ui/WordCard";
import CapriolaText from "../components/ui/CapriolaText"
import _ from "lodash";
import {speak} from '../services/speaker';
import BorderedButton from "../components/ui/BorderedButton";
import colors from "../assets/colours";
import Icon from "../components/ui/Icon";
import {Balloon, BalloonHeart, DoubleBalloons} from "../svg/balloons";

function withFlyUpAnimation(WrappedComponent){
	return class extends Component {

		constructor(props){
			super(props);
			this.screenHeight = Dimensions.get("window").height;
			this.position = {
				y: new Animated.Value(_.random(0, this.screenHeight))
			}
		}

		componentDidMount(){
			Animated.timing(this.position.y, {
				toValue: -2*this.screenHeight,
				duration: 3000,
				easing: Easing.ease
			}).start();
		}

		render(){
			return <Animated.View style={{transform: [{translateY: this.position.y}]}}><WrappedComponent {...this.props}/></Animated.View>
		}
	}
}

const AnimatedBalloon = withFlyUpAnimation(Balloon);
const AnimatedHeartBalloon = withFlyUpAnimation(BalloonHeart);
const AnimatedDoubleBalloons = withFlyUpAnimation(DoubleBalloons);

class BalloonsAnimated extends Component {

	constructor(props) {
		super(props);
		this.balloons = [
			{
				component: AnimatedHeartBalloon,
				styles: [
					{balloonColor: "#1983db", shadowColor: "#0f53b7"},
					{balloonColor: "#CC0099", shadowColor: "#99147D"},
					{balloonColor: "#15E6CD", shadowColor: "#1CCAD8"},
					{}]
			},
			{
				component: AnimatedBalloon,
				styles: [
					{balloonColor: "#FF9914", shadowColor: "#D87805"},
					{balloonColor: "#CFFFB3", shadowColor: "#ADE25D"},
					{balloonColor: "#F7EF66", shadowColor: "#ecc142"},
					{}
				]
			},
			{
				component:AnimatedDoubleBalloons,
				styles: [{}, {}, {}]
			}]
	}

	render() {
		return <View style={{
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "center",
			position: "absolute",
			top: 0,
			bottom: 0,
			right: 0,
			left: 0
		}}>
			{_.map(_.range(_.random(20, 30)), idx => {
					let balloon = _.sample(this.balloons);
					let RandomBalloon = balloon.component;
					let balloonStyles = _.sample(balloon.styles);
					let randomSize = _.random(100, 180);
					return <RandomBalloon {...balloonStyles}{...{width: randomSize, height:randomSize}} key={idx}/>
				})
			}
		</View>;
	}
}

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
			<BalloonsAnimated/>
			<BorderedButton icon="right-arrow" onPress={this.props.onPress} title="przejdź dalej"/>

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