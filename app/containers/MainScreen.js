import React from 'react';
import {Button, StatusBar} from 'react-native';
import {Layout} from "./Game";
import CapriolaText from "../components/ui/CapriolaText";
import _ from "lodash";

import * as allConfigs from "../../TEMP_CONFIGS";

const styles = {
	commandText: {
		fontSize: 40,
		color: "white"
	}
};

export default MainScreen = ({navigation}) =>
	<Layout>
		<StatusBar hidden={true}/>
		<CapriolaText style={styles.commandText}>Testing different game configurations screen:</CapriolaText>
		{_.chain(allConfigs)
			.toPairs()
			.map(([name, config]) => <Button title={name} key={name}
				onPress={() => navigation.navigate("Game", {config})}/>)
			.value()
		}
	</Layout>
