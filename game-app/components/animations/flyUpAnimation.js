import React, {Component} from "react";
import {Animated, Easing, Dimensions} from "react-native";
import _ from "lodash";

export default function withFlyUpAnimation(WrappedComponent){
    return class extends Component {

        constructor(props){
            super(props);
            this.screenHeight = Dimensions.get("window").height;
            this.position = {
                y: new Animated.Value(_.random(0, this.screenHeight))
            }
        }

        componentDidMount(){
            Animated.timing(this.position.y, {
                toValue: -2*this.screenHeight,
                duration: 4000,
                easing: Easing.ease
            }).start();
        }

        render(){
            return <Animated.View style={{transform: [{translateY: this.position.y}]}}><WrappedComponent {...this.props}/></Animated.View>
        }
    }
}