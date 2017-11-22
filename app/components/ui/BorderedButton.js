import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import Icon from "../../components/ui/Icon";
import colours from "../../assets/colours";
import {isPhone} from "../../services/deviceInfo";

export default BorderedButton = ({title, color, onPress, icon, disabled}) =>
	<TouchableOpacity onPress={onPress} disabled={disabled}>
		<View style={styles.border}>
		<View style={[styles.button, styles.centered]}>
			<View style={[styles.iconWrapper, styles.centered]}>
				<Icon color={color || colours.easternBlue} size={ isPhone() ? 25 : 35} name={icon}/></View>
		</View>
		</View>
	</TouchableOpacity>

const buttonSize = isPhone() ? 40 : 60;
const styles = StyleSheet.create({
	centered: {
		justifyContent: "center",
		alignItems: "center"
	},

	border: {
		padding: 3,
		borderColor: colours.tulipTree,
		borderStyle: "dashed",
		borderWidth: 1,
		borderRadius: 40
	},

	iconWrapper: {
		width: buttonSize,
		height: buttonSize,
		borderRadius: 100,
		backgroundColor: colours.white
	},

	button: {
		padding: 5,
		borderRadius: 30,
		flexDirection: "row"
	}
});
