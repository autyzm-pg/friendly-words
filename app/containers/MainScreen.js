import React from 'react';
import {Button, StatusBar} from 'react-native';
import {Layout} from "./Game";
import BorderedButton from '../components/ui/borderedButton/BorderedButton';

export default MainScreen = ({navigation}) =>
	<Layout>
		<BorderedButton size={300} icon="play" onPress={() => navigation.navigate("Game")}/>
	</Layout>
