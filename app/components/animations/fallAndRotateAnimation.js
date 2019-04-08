import React, {Component} from "react";
import {StyleSheet, View, Text, Animated, Image, Easing, Dimensions} from "react-native";
import _ from "lodash";


export default function withFallAndRotateUpAnimation(WrappedComponent) {
    return class extends Component {

        constructor(props) {
            super(props);
            this.animatedValue = new Animated.Value(0);
            this.screenHeight = Dimensions.get("window").height;
        }

        componentDidMount() {
            Animated.timing(
                this.animatedValue, {
                    toValue: 1,
                    duration: _.random(4000, 8000),
                }).start()
        }

        render() {
            const animation = {
                transform: [
                    {
                        translateY: this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-500, 2*this.screenHeight]
                        })
                    },
                    {rotate:  this.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', _.random(-5, 5) * 200 + 'deg'],
                        })
                    }
                ]
            };

            return (
                <Animated.View style={[styles.box, animation]}>
                    <WrappedComponent {...this.props}/>
                </Animated.View>
            );
        }
    }
}

const styles = StyleSheet.create({
    box: {
        alignItems: "center",
        justifyContent: "center"
    }
});