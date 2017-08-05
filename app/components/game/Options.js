import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Animated} from "react-native";
import _ from "lodash";

export const Option = ({material, onPress}) =>
	<TouchableOpacity style={styles.card} onPress={onPress}>
		<Image style={styles.image} source={{uri: material.image }}/>
		<Text style={styles.text}>{material.name}</Text>
	</TouchableOpacity>;


export default Options = ({materials, onCorrect, correct}) =>
	<View>
		{_.map(materials, (material, idx) => {
			const isCorrectAnswer = _.isEqual(correct.name, material.name);

			return <Option key={idx}
			               material={material}
			               onPress={isCorrectAnswer && onCorrect}
			               hint={isCorrectAnswer && _.delay(()=>console.log("TUTAJ"), 2000)}/>
		}
		)}
	</View>;


const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		borderRadius: 2,
		padding: 10,
		paddingBottom: 10,
		marginBottom: 20,
		alignItems: 'center'
	},
	image: {
		width: 100,
		height: 100
	},
	text: {
		marginTop: 10
	}
});
