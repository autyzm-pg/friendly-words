import React, {Component} from "react";
import {StyleSheet, View, Text, Animated, Image, Easing, Dimensions} from "react-native";
import _ from "lodash";


export default function withLeftOrRightAndRotateAnimation(WrappedComponent) {
    return class extends Component {

        constructor(props) {
            super(props);
            this.animatedValue = new Animated.Value(0);
            this.screenWeight = Dimensions.get("window").width;
        }

        componentDidMount() {
            Animated.timing(
                this.animatedValue, {
                    toValue: 1,
                    duration: 5000,
                    easing: Easing.linear
                }).start()
        }

        render() {
            const goRightAnimation = {
                transform: [
                    {
                        translateX: this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-this.screenWeight/2 - 150, this.screenWeight/2 + 150]
                        })
                    },
                    {rotate:  this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '500deg'],
                        })
                    }
                ]
            };

            const goLeftAnimation = {
                transform: [
                    {
                        translateX: this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [this.screenWeight/2 + 150 , -this.screenWeight/2 - 150]
                        })
                    },
                    {rotate:  this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '-500deg'],
                        })
                    }
                ]
            };

            if(_.random(0,1)==0) {
                return (
                    <Animated.View style={[styles.box, goRightAnimation]}>
                        <WrappedComponent {...this.props}/>
                    </Animated.View>
                );
            }
            else {
                return (
                    <Animated.View style={[styles.box, goLeftAnimation]}>
                        <WrappedComponent {...this.props}/>
                    </Animated.View>
                );
            }
        }
    }
}

const styles = StyleSheet.create({
    box: {
        alignItems: "center",
        justifyContent: "center"
    }
});