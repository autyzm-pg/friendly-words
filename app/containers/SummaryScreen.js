import React from "react";
import {Component} from "react";
import {JumboHeader} from "../components/ui/Header";
import {PlayButton} from "../components/ui/borderedButton/BorderedButton";
import CapriolaText from "../components/ui/CapriolaText";
import Icon from "../components/ui/Icon";
import {Layout} from "./Game";
import colours from "../assets/colours";

export class SummaryScreen extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <Layout>
            <Icon name="happy" color={colours.white} size={70}/>
            <JumboHeader>Koniec gry!</JumboHeader>
            <PlayButton onPress={this.props.onAccept}/>
            <CapriolaText>Zagraj ponownie</CapriolaText>
        </Layout>
    }
}
