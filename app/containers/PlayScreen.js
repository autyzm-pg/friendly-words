import React, {Component} from "react"
import {View, StyleSheet, StatusBar, Text, Easing} from "react-native"
import {ContainerStyles} from "../components/ui/Screens"
import Command from "../components/game/Command";
import _ from "lodash";
import {speak} from '../services/speaker';
import ReadingCommandButton from "../components/game/ReadingCommandButton";
import OptionsContainer from "../components/game/OptionsContainer";

export default class PlayScreen extends Component {
    constructor(props) {
        super(props);
        this.showOptions = this.showOptions.bind(this)
        this.readableCommand = _.replace(this.props.command, '{slowo}', this.props.correctWord)
        this.state = {shouldShowOptions: false, incorrectAnswers: 0}
    }

    showOptions() {
        this.setState({shouldShowOptions: true})
    }

    componentWillMount() {
        this.props.shouldReadCommand
            ? speak(this.readableCommand, {onDone: this.showOptions})
            : _.delay(this.showOptions, 500)
    }

    render() {
        const {command, correctWord, ...optionsProps} = this.props
        return <View style={[ContainerStyles.paddedContainer, ContainerStyles.centeredContainer]}>
            <View style={styles.topbar}>
                <View style={styles.commandButtonPositioning}>
                    <ReadingCommandButton command={this.readableCommand}/>
                </View>
                <Command text={command} word={correctWord}/>
            </View>
            <OptionsContainer shouldShowOptions={this.state.shouldShowOptions}
                              onCorrect={() => this.props.onCorrectAnswer(this.state.incorrectAnswers)}
                              onIncorrect={()=> this.setState({incorrectAnswers: this.state.incorrectAnswers+1})}
                              {..._.omit(optionsProps, 'shouldReadCommand')} />
        </View>;
    }
}

const styles = StyleSheet.create({
    commandButtonPositioning: {
        position: "absolute",
        right: 0
    },

    topbar: {
        position: "relative",
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "center"
    }
});


