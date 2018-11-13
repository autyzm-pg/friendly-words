import React from 'react';
import {Button, StatusBar} from 'react-native';
import {Layout} from "./Game";
import {PlayButton} from '../components/ui/borderedButton/BorderedButton';
import {JumboHeader} from "../components/ui/Header";
import {View} from "glamorous-native";

export default MainScreen = ({navigation}) =>
	<Layout>
		<View flex={1} alignItems={"center"} justifyContent={"space-around"}>
        	<JumboHeader>Przyjazne Słowa</JumboHeader>
			<PlayButton onPress={() => navigation.navigate("Game")}/>
		</View>
	</Layout>
