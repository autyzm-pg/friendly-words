import React, {Component} from "react"
import glamorous from 'glamorous-native';
import Options from "./Options";
import _ from "lodash";
import {moderateScale} from "../../services/scalign";

const CARDS_MARGIN = moderateScale(15);
const MAX_CARD_WIDTH = 500;
export default class OptionsContainer extends Component {
    constructor(props){
        super(props)
        this.onLayout = this.onLayout.bind(this)
        this.state = {cardSize: 150}
    }

    onLayout(e) {
        const containerWidth = e.nativeEvent.layout.width,
            cardSize = Math.floor(containerWidth / this.props.words.length) - CARDS_MARGIN;
        this.setState({cardSize: cardSize > MAX_CARD_WIDTH ? MAX_CARD_WIDTH : cardSize })
    }

    render() {
        const {shouldShowOptions, shouldShowPicturesLabels, words, ...rest} = this.props;
        const materials = shouldShowPicturesLabels ? words : _.map(words, word => _.omit(word, 'name'));

        return <FullWidthContainer onLayout={this.onLayout}>
            { shouldShowOptions &&
            <Options cardSize={this.state.cardSize} materials={materials} {...rest} /> }
        </FullWidthContainer>
    }
}

const FullWidthContainer = glamorous.view({
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
});
