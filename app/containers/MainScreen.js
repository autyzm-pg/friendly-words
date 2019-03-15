import React from 'react';
import {Button, StatusBar} from 'react-native';
import {Layout} from "./Game";
import {PlayButton} from '../components/ui/borderedButton/BorderedButton';
import {JumboHeader, Configurationheader} from "../components/ui/Header";
import {View} from "glamorous-native";
import ConfigConsumer from "./ConfigConsumer";
import Game from "./Game";

export default MainScreen = ({navigation}) =>
	<Layout>
		<View flex={1} alignItems={"center"} justifyContent={"space-around"}>
        	<JumboHeader>Przyjazne Słowa</JumboHeader>
            <ConfigConsumer>
                {(config) =>  <Configurationheader>{`Aktywna konfiguracja: ${config.name}`}</Configurationheader>}
            </ConfigConsumer>
			<PlayButton onPress={() => navigation.navigate("Game")}/>
		</View>
	</Layout>
