import React, {Component} from "react";
import {Animated, Easing, Dimensions} from "react-native";
import _ from "lodash";

export default function withDriveRightAnimation(WrappedComponent){
    return class extends Component {

        constructor(props){
            super(props);
            this.screenHeight = Dimensions.get("window").height;
            this.screenWidth = Dimensions.get("window").width;
            this.position = {
                y: new Animated.Value(_.random(0, this.screenHeight)),
                x: new Animated.Value(_.random(0, this.screenWidth))
            };
            this.screenWidthw = Dimensions.get("window").width;
        }

        componentDidMount(){
            Animated.timing(this.position.x, {
                toValue: 2*this.screenWidth,
                duration: 4000,
                easing: Easing.ease
            }).start();
        }

        render(){
            return <Animated.View style={{transform: [{translateX: this.position.x}]}}><WrappedComponent {...this.props}/></Animated.View>
        }
    }
}