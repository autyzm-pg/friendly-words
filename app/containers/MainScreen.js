import React from 'react';
import {Button, StatusBar} from 'react-native';
import {Layout} from "./Game";
import {PlayButton} from '../components/ui/borderedButton/BorderedButton';
import {JumboHeader} from "../components/ui/Header";

export default MainScreen = ({navigation}) =>
	<Layout>
        <JumboHeader>Przyjazne Słowa</JumboHeader>
		<PlayButton onPress={() => navigation.navigate("Game")}/>
	</Layout>
