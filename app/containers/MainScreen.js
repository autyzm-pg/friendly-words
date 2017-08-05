import React from 'react';
import {View, Text, Button} from 'react-native';

export default MainScreen = ({navigation}) =>
	<View>
		<Text>HEHLOL NIGGAZ</Text>
		<Button title="KLIKAJ" onPress={() => navigation.navigate("Game")} />
	</View>