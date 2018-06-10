import React from 'react';
import {Button, StatusBar} from 'react-native';
import {Layout} from "./Game";
import {PlayButton} from '../components/ui/borderedButton/BorderedButton';
import {Header} from "../components/ui/Header";

export default MainScreen = ({navigation}) =>
	<Layout>
        <Header fontSize={60}>Przyjazne Słowa</Header>
		<PlayButton onPress={() => navigation.navigate("Game")}/>
	</Layout>
