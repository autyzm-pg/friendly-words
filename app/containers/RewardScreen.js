import React, {Component, Fragment} from "react";
import {View} from "glamorous-native";
import WordCard from "../components/ui/wordCard/WordCard";
import _ from "lodash";
import {speak} from '../services/speaker';
import BorderedButton from "../components/ui/borderedButton/BorderedButton";
import {width} from "../services/deviceInfo";
import AnimatedBalloons from "../components/animations/AnimatedBalloons";
import {Header} from "../components/ui/Header";
import {TopbarContainer, BottombarContainer, PositionRight} from "../components/ui/Topbar";
import ReadingCommandButton from '../components/game/ReadingCommandButton';
import Colors from '../assets/colours';
import {moderateScale} from "../services/scalign";
import AnimatedCars from "../components/animations/AnimatedCars";
import AnimatedChildishCars from "../components/animations/AnimatedChildishCar";

const REWARDS = [AnimatedBalloons, AnimatedCars, AnimatedChildishCars];

const SampleReward = () => {
  const Reward = _.sample(REWARDS);
  return <Reward />;
};
const withReward = WrappedComponent =>
  class extends Component {
    componentDidMount() {
      this.props.shouldReadReward
        ? this.readReward()
        : _.noop();
    }

    readReward() {
      speak(this.props.textReward)
    }

    render() {
      return <Fragment>
        <WrappedComponent {...this.props} />
        <SampleReward />
      </Fragment>
    }
  };

export class ReinforcingScreen extends Component {

  componentDidMount() {
    speak(this.props.word.name)
  }

  render() {
    return <Fragment>
      <TopbarContainer>
        <Header>{this.props.word.name}</Header>
        <PositionRight><ReadingCommandButton command={this.props.word.name}/></PositionRight>
      </TopbarContainer>
      <View flex={1} alignItems={"center"} justifyContent={"center"} marginTop={moderateScale(30)}>
        <WordCard imageUrl={this.props.word.image} cardSize={width/2.5} noBorder={true}/>
      </View>
      <BottombarContainer>
        <BorderedButton icon="left-arrow" color={Colors.burntSienna} onPress={this.props.onPrevPress}/>
        <BorderedButton icon="right-arrow" color={Colors.apple} onPress={this.props.onPress}/>
      </BottombarContainer>
    </Fragment>
  }
}

export default RewardScreen = withReward(ReinforcingScreen);
