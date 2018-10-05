import React, {Component} from "react";
import {Animated, Easing, Dimensions} from "react-native";
import _ from "lodash";

export default function withDriveRightAnimation(WrappedComponent){
    return class extends Component {

        constructor(props){
            super(props);
            this.screenWidth = Dimensions.get("window").width;
            this.position = {
                x: new Animated.Value(50)
            };
        }

        componentDidMount(){
            Animated.timing(this.position.x, {
                toValue: 2*this.screenWidth,
                duration: _.random(1000,4000),
                easing: Easing.cubic
            }).start();
            }

        render(){
            return <Animated.View style={{transform: [{translateX: this.position.x}]}}><WrappedComponent {...this.props}/></Animated.View>;
        }
    }
}