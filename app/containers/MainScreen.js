import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';

export default MainScreen = ({navigation}) =>
	<View>
		<StatusBar hidden={true}/>
		<Text>HEHLOL NIGGAZ</Text>
		<Button title="KLIKAJ" onPress={() => navigation.navigate("Game")} />
	</View>