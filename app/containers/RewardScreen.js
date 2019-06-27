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
import AnimatedBall from "../components/animations/AnimatedBall";
import AnimatedFlower from "../components/animations/AnimatedFlower";
import {Cool, Good, Great} from "../../android/app/src/main/res/constantStrings";


const REWARDS = [ AnimatedBalloons, AnimatedCars, AnimatedChildishCars, AnimatedFlower, AnimatedBall];
const GOOD_VOICE_REWARDS = [ 'dobrze1.mp3', 'dobrze2.mp3', 'dobrze3.mp3','dobrze4.mp3'];
const SUPER_VOICE_REWARDS = [ 'sup1.mp3', 'sup2.mp3', 'sup3.mp3','sup4.mp3'];
const GREAT_VOICE_REWARDS = [ 'swietnie1.mp3', 'swietnie2.mp3', 'swietnie3.mp3','swietnie4.mp3','swietnie5.mp3'];

const SampleReward = () => {
  const Reward = _.sample(REWARDS);
  return <Reward />;
};

export default class RewardScreen extends Component {
  componentDidMount() {
    this.props.shouldReadReward
        ? this.readReward()
        : speak(this.props.word.name, '');
  }

  readReward() {
    let rewardFile='';
    switch (this.props.textReward) {
      case Good:
        rewardFile = _.sample(GOOD_VOICE_REWARDS);
        break;

      case Cool:
        rewardFile = _.sample(SUPER_VOICE_REWARDS);
        break;

      case Great:
        rewardFile = _.sample(GREAT_VOICE_REWARDS);
        break;

      default:
        break;
    }
    console.log("2TextReward-> " + this.props.textReward+" Nagroda => " + rewardFile);
    speak(this.props.word.name, rewardFile);
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
      <SampleReward/>
    </Fragment>
  }
}