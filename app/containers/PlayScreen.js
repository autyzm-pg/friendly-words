import React, {Component, Fragment} from "react"
import Command from "../components/game/Command"
import _ from "lodash"
import {speak} from '../services/speaker'
import ReadingCommandButton from "../components/game/ReadingCommandButton"
import OptionsContainer from "../components/game/OptionsContainer"
import {PositionRight, TopbarContainer} from "../components/ui/Topbar"
import * as constants from "../../android/app/src/main/res/constantStrings";

export default class PlayScreen extends Component {
    constructor(props) {
        super(props)
        this.showOptions = this.showOptions.bind(this)
        this.readableCommand = () => _.replace(this.props.command, '{' + constants.Word +'}', this.props.correctWord)
        this.state = {shouldShowOptions: false, incorrectAnswers: 0}
    }

    readCommandAndShowOptions = () => {
        this.props.shouldReadCommand
            ? speak(this.readableCommand(), '', {onDone: this.showOptions})
            : _.delay(this.showOptions, 500)
    }

    showOptions() {
        this.setState({shouldShowOptions: true})
    }

    componentDidMount() {
        this.readCommandAndShowOptions()
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(prevProps.words, this.props.words)) {

            this.readCommandAndShowOptions()
        }
    }

    onCorrect = () => this.setState({shouldShowOptions: false}, this.props.onCorrectAnswer(this.state.incorrectAnswers))


    onIncorrect = () =>
        this.setState({
            shouldShowOptions: !this.props.isTestMode,
            incorrectAnswers: this.state.incorrectAnswers + 1
        }, this.props.onIncorrectAnswer)

    render() {
    const {command, correctWord, ...optionsProps} = this.props;

        return <Fragment>
            <TopbarContainer>
                <PositionRight><ReadingCommandButton command={this.readableCommand()}/></PositionRight>
                <Command text={command} word={correctWord}/>
            </TopbarContainer>
            <OptionsContainer shouldShowOptions={this.state.shouldShowOptions}
                              onCorrect={this.onCorrect}
                              onIncorrect={this.onIncorrect}
                              {..._.omit(optionsProps, 'shouldReadCommand')} />
        </Fragment>
    }
}

