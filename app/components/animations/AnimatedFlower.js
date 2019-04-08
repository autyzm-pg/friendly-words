import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import _ from "lodash";
import {Daisy} from "../../svg/flowers";
import withFallAndRotateUpAnimation from "./fallAndRotateAnimation";

const AnimatedDaisy = withFallAndRotateUpAnimation(Daisy);

export default class FlowerAnimated extends Component {

    constructor(props) {
        super(props);
        this.flowers = [
            {
                component: AnimatedDaisy,
                styles: [
                    {flowerColor: "#1983db"},
                    {flowerColor: "#CC0099"},
                    {flowerColor: "#15E6CD"},
                    {flowerColor: "#99147D"},
                    {flowerColor: "#6C00FF"},
                    {flowerColor: "#FAFF99"},
                    {flowerColor: "#FA00FF"},
                    {flowerColor: "#FF6E6B"},
                    {flowerColor: "#00EAFF"},
                    {flowerColor: "#F9FF00"},
                    {flowerColor: "#FC0000"},
                    {flowerColor: "#FFB700"},
                    {}]
            }]
    }

    render() {
        return <View style={style.animatedContainer} pointerEvents="none">
            {_.map(_.range(_.random(15, 20)), idx => {
                let flower = _.sample(this.flowers);
                let RandomFlower = flower.component;
                let flowerStyles = _.sample(flower.styles);
                let randomSize = _.random(100, 180);
                return <RandomFlower {...flowerStyles}{...{width: randomSize, height:randomSize}} key={idx}/>
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