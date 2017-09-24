import React from "react"
import {Text, StyleSheet} from "react-native"

export default CapriolaText = ({children, style}) =>
 <Text style={[styles.basicText, style]}>{children}</Text>

const styles = StyleSheet.create({
	basicText: {
		fontFamily: "capriola-regular",
		fontSize: 16,
		color: "#292F36"
	},
});
