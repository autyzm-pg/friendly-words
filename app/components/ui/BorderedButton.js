import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import Icon from "../../components/ui/Icon";
import colours from "../../assets/colours";

export default BorderedButton = ({title, onPress, icon}) =>
	<TouchableOpacity onPress={onPress}>
		<View style={styles.border}>
		<View style={[styles.button, styles.centered]}>
			<View style={[styles.iconWrapper, styles.centered]}><Icon color={colours.easternBlue} size={30} name={icon}/></View>
		</View>
		</View>
	</TouchableOpacity>

const styles = StyleSheet.create({
	centered: {
		justifyContent: "center",
		alignItems: "center"
	},

	border: {
		padding: 5,
		borderColor: colours.tulipTree,
		borderStyle: "dashed",
		borderWidth: 1,
		borderRadius: 40
	},

	iconWrapper: {
		width: 50,
		height: 50,
		borderRadius: 100,
		backgroundColor: colours.white
	},

	button: {
		padding: 5,
		borderRadius: 30,
		flexDirection: "row"
	}
});
