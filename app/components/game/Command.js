import React from "react";
import {Text, View, StyleSheet} from "react-native";
import _ from "lodash";
import CapriolaText from "../ui/CapriolaText";
import colors from "../../assets/colours";

export default Command = ({text, word}) =>
	<View style={styles.container}>
		<CapriolaText style={styles.text}>{_.replace(text, '{slowo}', word)}</CapriolaText>
	</View>;

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		marginBottom: 40
	},

	text: {
		fontSize: 50,
		color: colors.white
	}
});
