import React, {Component, Fragment} from "react"
import {Animated, Dimensions, Easing, StyleSheet, Text, View} from "react-native"
import WordCard from "../components/ui/wordCard/WordCard"
import _ from "lodash"
import {speak} from '../services/speaker'
import BorderedButton from "../components/ui/borderedButton/BorderedButton"
import {width} from "../services/deviceInfo"
import {Header} from "../components/ui/Header"
import {PositionRight, TopbarContainer} from "../components/ui/Topbar"
import ReadingCommandButton from '../components/game/ReadingCommandButton'
import glamorous from 'glamorous-native'

const Circle = glamorous(Animated.View)(
    ({size = 0}) => (
        {
            width: size,
            height: size,
            borderRadius: size,
            backgroundColor: 'white',
            justifyContent: "center",
            alignItems: "center",

        }),

    ({spark}) => (
        {
            position: 'absolute',
            top: spark.y,
            left: spark.x
        })
)

Circle.propsAreStyleOverrides = true

const AvailableSpaceContainer = glamorous.view({
    flexDirection: "column",
    flexWrap: "wrap",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
})



class Sparkles extends Component {
    constructor(props) {
        super(props);
        this.screenSize = Dimensions.get("window");

        const getClusterInitialPosition = () => ({
          x: new Animated.Value(this.screenSize.width/2),
            y: new Animated.Value(this.screenSize.height/2)
        })

        const sparksPerCluster = 5;
        const sparkClustersCount = 3;


        this.sparkClusters = _.times(sparkClustersCount, () => _.times(sparksPerCluster, getClusterInitialPosition));
    }

    render(){
        return <Fragment>
            {_.map(this.sparkClusters, (cluster, clusterId) => _.map(cluster, (spark, sparkId) => <Circle key={`${clusterId}-${sparkId}`} size={30} spark={spark}/>))}
        </Fragment>
    }
}

class AnimatedReward extends Component {
    constructor(props){
        super(props);
        this.size = new Animated.Value(0);
    }

    componentDidMount(){
        Animated.timing(this.size, {toValue: 400, duration: 400, easing: Easing.inOut(Easing.circle)}).start();
    }

    render(){
        return <Fragment><Sparkles /></Fragment>
    }
}
//<Circle size={this.size}><BalloonHeart/></Circle>
export class RewardScreen extends Component {
    componentDidMount() {
        this.props.shouldReadReward
            ? this.readReward()
            : _.noop();
    }

    readReward() {
        speak(this.props.textReward)
    }

  render(){
    return <Fragment>
      <TopbarContainer>
          <Header>{this.props.textReward}</Header>
      </TopbarContainer>
        <AvailableSpaceContainer>
        <AnimatedReward />
        </AvailableSpaceContainer>
    </Fragment>
  }
}



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
      <AvailableSpaceContainer>
      <WordCard imageUrl={this.props.word.image} cardSize={width / 2.5} noBorder={true}/>
      <BottombarContainer>
        <BorderedButton icon="left-arrow" color="#E37346" onPress={this.props.onPrevPress}/>
        <BorderedButton icon="right-arrow" color="#53AD4B" onPress={this.props.onPress}/>
      </BottombarContainer>
      </AvailableSpaceContainer>
    </Fragment>
  }
}

const BottombarContainer = glamorous.view({
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    paddingVertical: 10
})

