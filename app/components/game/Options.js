import React from "react";
import {View, TouchableOpacity, StyleSheet, Text, UIManager} from "react-native";
import _ from "lodash";
import WordCard from "../ui/WordCard";

function getRandomDegree(){
	return _.random(-10, 10);
}
export const Option = ({material, image, onPress}) =>
	<TouchableOpacity onPress={onPress}>
		<WordCard isClickable text={material} imageUrl={image}/>
	</TouchableOpacity>;


const FadingOption = (props) =>
	<View style={{ opacity: props.shouldFade ? 0.2 : 1}}>
		<Option {...props} />
	</View>;

class CorretOption extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <View><Option {...this.props} /></View>
	}
}
const Hint = () =>
	<Text>TUTEJ</Text>;

const FadeAwayHintOptions = ({materials, onCorrect, shouldShowHint}) =>
	<View style={styles.container}>
		{_.map(materials, (material, idx) => {
		return material.isCorrectAnswer
			? <CorretOption key={idx} material={material.name} image={material.image} onPress={onCorrect} />
			: <FadingOption key={idx} material={material.name} image={material.image} shouldFade={shouldShowHint}/>
	}
	)}
	</View>;

export default class Options extends React.Component{
	constructor(props){
		super(props);

		this.showHint = this.showHint.bind(this);
		this.idk = null;
		this.state = {shouldShowHint: false}
	}

	componentWillUnmount(){
		clearTimeout(this.idk);
	}

	componentDidMount(){
		this.idk = setTimeout(() => {this.showHint()}, 3000);
	}

	showHint(){
		this.setState({shouldShowHint: true});
	}

	render(){
		return <View>
			<FadeAwayHintOptions materials={this.props.materials} onCorrect={this.props.onCorrect} shouldShowHint={this.state.shouldShowHint}/>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center"
	}
});
