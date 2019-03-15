import React, {Fragment} from "react";
import {View, TouchableOpacity, StyleSheet, Text, UIManager} from "react-native";
import _ from "lodash";
import WordCard from "../ui/wordCard/WordCard";
import {Dimensions, PixelRatio} from "react-native";

export const Option = ({material, image, onPress, cardSize}) => {
  const wordCard = <WordCard cardSize={cardSize} isClickable text={material} imageUrl={image}/>;
  return onPress
    ? <TouchableOpacity onPress={onPress}>{wordCard}</TouchableOpacity>
    : <View>{wordCard}</View>
};

const FadingOption = (props) =>
  <View style={{opacity: props.shouldFade ? 0.2 : 1}}>
    <Option {...props} />
  </View>;

class CorretOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View><Option {...this.props} /></View>
  }
}

const FadeAwayHintOptions = ({materials, onCorrect, onIncorrect, shouldShowHint, cardSize}) => {
  return <Fragment>
    {_.map(materials, (material, idx) => {
        return material.isCorrectAnswer
          ? <CorretOption key={idx} cardSize={cardSize} material={material.name} image={material.image}
                          onPress={onCorrect}/>
          : <FadingOption key={idx} cardSize={cardSize} material={material.name} image={material.image}
                          shouldFade={shouldShowHint} onPress={onIncorrect}/>
      }
    )}
  </Fragment>
};

const seconds = (duration) => duration * 1000;

export default class Options extends React.Component {
  constructor(props) {
    super(props);

    this.showHint = this.showHint.bind(this);
    this.idk = null;
    this.state = {shouldShowHint: false}
  }

  componentWillUnmount() {
    clearTimeout(this.idk);

  }

  componentDidUpdate(){
    if(this.idk && this.props.timeForAnswer){
      clearTimeout(this.idk);
      this.idk = setTimeout(this.props.onIncorrect, seconds(this.props.timeForAnswer))
    }
  }

  componentDidMount() {
    if (this.props.showHintAfter) {
      this.idk = setTimeout(this.showHint, seconds(this.props.showHintAfter));
    }

    if(this.props.timeForAnswer){
      this.idk = setTimeout(this.props.onIncorrect, seconds(this.props.timeForAnswer))
    }
  }

  showHint() {
    this.props.onIncorrect && this.props.onIncorrect();
    this.setState({shouldShowHint: true});
  }

  render() {
    //from react-native documentation
    /*  Although dimensions are available immediately, they may change (e.g due to device rotation) so any rendering
      logic or styles that depend on these constants should try to call this function on every render,
      rather than caching the value
      */

    return <FadeAwayHintOptions cardSize={this.props.cardSize} materials={this.props.materials}
                                onCorrect={this.props.onCorrect} onIncorrect={this.showHint}
                                shouldShowHint={this.state.shouldShowHint}/>
  }
}
