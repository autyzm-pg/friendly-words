import React from "react";
import {Text, TouchableOpacity} from "react-native";
import Tts from "react-native-tts"
import _ from "lodash";

export default Command = ({text, word}) =>
	<TouchableOpacity onPress={ () => Tts.speak(_.replace(text, '{slowo}', word))}>
		<Text style={{marginTop: 100}}>{_.replace(text, '{slowo}', word)}</Text>
	</TouchableOpacity>;