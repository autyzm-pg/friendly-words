import React from "react";
import {View, Image, StyleSheet, Dimensions} from "react-native";
import CapriolaText from "../ui/CapriolaText";
import colors from "../../assets/colours";

export default WordCard = ({text, imageUrl, isClickable, rotate, cardSize}) =>
<View style={[styles.dashedBorder, cardSize && {width: cardSize, height: cardSize}]}>
	<View style={styles.card}>
		<Image style={styles.image} source={imageUrl}/>
		{text && <CapriolaText style={styles.text}>{text}</CapriolaText>}
	</View>
</View>;


const styles = StyleSheet.create({
	dashedBorder: {
		padding: 5,
		borderStyle: "dashed",
		borderWidth: 2,
		borderRadius: 20,
		borderColor: colors.tulipTree
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 16,
		flex: 1,
		padding: 4,
		overflow: 'hidden'
	},

	image: {
		flex: 1,
		width: undefined,
		height: undefined,
		resizeMode: 'contain'
	},

	text: {
		margin: 4,
		fontSize: 16,
		color: '#212223',
		textAlign: "center"
	}
});