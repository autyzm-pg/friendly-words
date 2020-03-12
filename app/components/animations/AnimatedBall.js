import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import _ from "lodash";
import {Football, Volleyball, Beachball, Baseball, Tennisball, Basketball} from "../../svg/balls";
import withLeftOrRightAndRotateAnimation from "./leftOrRightAndRotateAnimation";

const AnimatedFootball = withLeftOrRightAndRotateAnimation(Football);
const AnimatedVolleyball = withLeftOrRightAndRotateAnimation(Volleyball);
const AnimatedBeachball = withLeftOrRightAndRotateAnimation(Beachball);
const AnimatedBaseball = withLeftOrRightAndRotateAnimation(Baseball);
const AnimatedTennisball = withLeftOrRightAndRotateAnimation(Tennisball);
const AnimatedBasketball = withLeftOrRightAndRotateAnimation(Basketball);

export default class BallAnimated extends Component {

    constructor(props) {
        super(props);
        this.balls = [
            {
                component: AnimatedFootball,
            },
            {
                component: AnimatedVolleyball,
            },
            {
                component: AnimatedBeachball,
            }
            ,
            {
                component: AnimatedBaseball,
            },
            {
                component: AnimatedTennisball,
            },
            {
                component: AnimatedBasketball,
            }

        ]
    }

    render() {
        return <View style={style.animatedContainer} pointerEvents="none">
            {_.map(_.range(1), idx => {
                let ball = _.sample(this.balls);
                let RandomBall = ball.component;
                let size = 300;
                return <RandomBall {...{width: size, height:size}} key={idx}/>
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