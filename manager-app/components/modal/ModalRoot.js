import * as React from "react"
import {View} from "react-native"
import CustomModal from "./CustomModal"
import {askFactory} from "./askFactory"
import {initializeModal} from "./Modal"
import {Asker} from "./Asker/Asker"
import {TextAsker} from "./Asker/TextAsker"
import OptionAsker from "./Asker/OptionAsker"

export class ModalRoot extends React.Component {
    constructor() {
        super()
        this.state = {isOpened: false, children: undefined}
    }

    show = (children) => this.setState({isOpened: true, children})
    hide = () => this.setState({isOpened: false})

    askFactory = askFactory({show: this.show, hide: this.hide})

    actions = {
        show: this.show,
        hide: this.hide,
        toggle: () => this.setState(prevState => ({isOpened: !prevState.isOpened})),
        ask: this.askFactory(Asker),
        textAsk: (question, defaultText="", positive=true) => this.askFactory(TextAsker(defaultText))(question, positive),
        optionAsk: (question, options) => this.askFactory(OptionAsker(options))(question),
        custom: (Component) => this.askFactory(Component)()
    }

    componentWillMount() {
        initializeModal(this.actions)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.props.children}
                <CustomModal animationType={"slide"}
                             visible={this.state.isOpened}
                             transparent={true}
                             onRequestClose={() => this.hide()}
                             style={{margin: 20}}
                >
                    <View style={{margin: 10}}>
                        {this.state.children}
                    </View>
                </CustomModal>
            </View>
        )
    }
}