import React, {Component} from "react"
import {ContainerStyles} from "../ui/Screens"
import {View, StyleSheet} from "react-native"
import Options from "./Options";
import _ from "lodash";

const CARDS_MARGIN = 12;
const MAX_CARD_WIDTH = 500;
export default class OptionsContainer extends Component {
    constructor(props){
        super(props)
        this.onLayout = this.onLayout.bind(this)
        this.state = {cardSize: 150}
    }

    onLayout(e) {
        const containerWidth = e.nativeEvent.layout.width,
            cardSize = Math.floor(containerWidth / this.props.words.length) - CARDS_MARGIN
        this.setState({cardSize: cardSize > MAX_CARD_WIDTH ? MAX_CARD_WIDTH : cardSize })
    }

    render() {
        const {shouldShowOptions, shouldShowPicturesLabels, words, ...rest} = this.props
        const materials = shouldShowPicturesLabels ? words : _.map(words, word => _.omit(word, 'name')),
            style = [ContainerStyles.fullSizeContainer, ContainerStyles.centeredContainer, styles.optionsContainer];

        return <View onLayout={this.onLayout} style={style}>
            { shouldShowOptions &&
            <Options cardSize={this.state.cardSize} materials={materials} {...rest} /> }
        </View>
    }
}

const styles = StyleSheet.create({
    optionsContainer: {
        alignSelf: "stretch",
    }
})
