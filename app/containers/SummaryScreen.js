import React from "react";
import {Component} from "react";
import {JumboHeader} from "../components/ui/Header";
import {PlayButton} from "../components/ui/borderedButton/BorderedButton";
import CapriolaText from "../components/ui/CapriolaText";
import Icon from "../components/ui/Icon";
import {Layout} from "./Game";
import colours from "../assets/colours";
import {View} from "glamorous-native";
import * as constants from "../../android/app/src/main/res/constantStrings";

export class SummaryScreen extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <Layout>
            <View flex={1} alignItems={"center"} justifyContent={"center"}>
                <Icon name="happy" color={colours.white} size={70}/>
                <JumboHeader>{constants.GameOver}</JumboHeader>
                <PlayButton onPress={this.props.onAccept}/>
                <CapriolaText>{constants.PlayAgain}</CapriolaText>
            </View>
        </Layout>
    }
}
