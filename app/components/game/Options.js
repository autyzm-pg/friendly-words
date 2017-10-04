import React from "react";
import {View, TouchableOpacity, StyleSheet, Text, UIManager} from "react-native";
import _ from "lodash";
import WordCard from "../ui/WordCard";

export const Option = ({material, image, onPress}) => {
	const wordCard = <WordCard isClickable text={material} imageUrl={image}/>;
	return onPress
		? <TouchableOpacity onPress={onPress}>{wordCard}</TouchableOpacity>
		: <View>{wordCard}</View>
};


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
		if(this.props.showHintAfter) {
			this.idk = setTimeout(() => {
				this.showHint()
			}, this.props.showHintAfter * 1000);
		}
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
