import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {Balloon, BalloonHeart, DoubleBalloons} from "../../svg/balloons";
import withFlyUpAnimation from "./flyUpAnimation";
import _ from "lodash";

const AnimatedBalloon = withFlyUpAnimation(Balloon);
const AnimatedHeartBalloon = withFlyUpAnimation(BalloonHeart);
const AnimatedDoubleBalloons = withFlyUpAnimation(DoubleBalloons);

export default class BalloonsAnimated extends Component {

    constructor(props) {
        super(props);
        this.balloons = [
            {
                component: AnimatedHeartBalloon,
                styles: [
                    {balloonColor: "#1983db", shadowColor: "#0f53b7"},
                    {balloonColor: "#CC0099", shadowColor: "#99147D"},
                    {balloonColor: "#15E6CD", shadowColor: "#1CCAD8"},
                    {}]
            },
            {
                component: AnimatedBalloon,
                styles: [
                    {balloonColor: "#FF9914", shadowColor: "#D87805"},
                    {balloonColor: "#CFFFB3", shadowColor: "#ADE25D"},
                    {balloonColor: "#F7EF66", shadowColor: "#ecc142"},
                    {}
                ]
            },
            {
                component:AnimatedDoubleBalloons,
                styles: [
                    {
                        firstBalloonColor: "#47D2A5", firstBalloonShadowColor: "#35CA99",
                        secondBalloonColor: "#90D7FF", secondBalloonShadowColor: "#63A5CC"},
                    {
                        firstBalloonColor: "#EF5562", firstBalloonShadowColor: "#DB3D45",
                        secondBalloonColor: "#1098F7", secondBalloonShadowColor: "#106DB7"
                    },
                    {
                        firstBalloonColor: "#30BCE9", firstBalloonShadowColor: "#29A7D3",
                        secondBalloonColor: "#F0EC57", secondBalloonShadowColor: "#F0EC57"
                    }]
            }]
    }

    render() {
        return <View style={style.animatedContainer} pointerEvents="none">
            {_.map(_.range(_.random(28, 38)), idx => {
                let balloon = _.sample(this.balloons);
                let RandomBalloon = balloon.component;
                let balloonStyles = _.sample(balloon.styles);
                let randomSize = _.random(100, 180);
                return <RandomBalloon {...balloonStyles}{...{width: randomSize, height:randomSize}} key={idx}/>
            })
            }
        </View>;
    }
}

const style = StyleSheet.create({
    animatedContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    }
});