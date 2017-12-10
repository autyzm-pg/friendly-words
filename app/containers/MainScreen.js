import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {Layout} from "./Game";
import CapriolaText from "../components/ui/CapriolaText";
import BorderButton from "../components/ui/BorderedButton";
import _ from "lodash";

import * as allConfigs from "../../TEMP_CONFIGS";

const styles = {
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	commandText: {
		fontSize: 40,
		color: "white"
	}
};

export default MainScreen = ({navigation}) =>
	<Layout style={styles.container}>
		<StatusBar hidden={true}/>
		<CapriolaText style={styles.commandText}>Testing different game configurations screen:</CapriolaText>
		{_.chain(allConfigs)
			.toPairs()
			.map(([name, config]) => <Button title={name} key={name}
				onPress={() => navigation.navigate("Game", {config})}/>)
			.value()
		}
	</Layout>
