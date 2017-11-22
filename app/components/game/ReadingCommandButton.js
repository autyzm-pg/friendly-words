import BorderedButton from "../ui/BorderedButton";
import React, {Component} from "react";
import {speak} from '../../services/speaker';

export default class ReadingCommandButton extends Component {
	constructor(props){
		super(props);
		this.toggleAvailability = this.toggleAvailability.bind(this);
		this.readCommand = this.readCommand.bind(this);
		this.state = {
			isAvailable: true
		}
	}

	toggleAvailability(){
		this.setState({isAvailable: !this.state.isAvailable})
	}

	readCommand(){
		const {onStart, onDone, command} = this.props;
		speak(command, {
			onStart: () => {onStart && onStart(); this.toggleAvailability()},
			onDone: () => {onDone && onDone(); this.toggleAvailability()}
		});
	}

	render(){
		return <BorderedButton icon="sound" title="odtwórz polecenie" disabled={!this.state.isAvailable} onPress={this.readCommand}/>
	}
}