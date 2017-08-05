import React from "react";
import {TouchableOpacity, Text} from "react-native";

const RewardScreen = ({word, textReward, onPress}) =>
 <TouchableOpacity onPress={onPress}>
	 <Text>{textReward}</Text>
	 <Text>{word}</Text>
 </TouchableOpacity>;

 export default RewardScreen;