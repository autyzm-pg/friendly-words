import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {BusCar, MiniBusCar, CityCar} from "../../svg/cars";
import withDriveRightAnimation from "./driveRightAnimation";
import _ from "lodash";

const AnimatedBusCar = withDriveRightAnimation(BusCar);
const AnimatedMiniBusCar = withDriveRightAnimation(MiniBusCar);
const AnimatedCityCars = withDriveRightAnimation(CityCar);

export default class CarsAnimated extends Component {

    constructor(props) {
        super(props);
        this.cars = [
            {
                component: AnimatedMiniBusCar,
                styles: [
                    {carColor: "#1983db", linesColor: "#0f53b7"},
                    {carColor: "#CC0099", linesColor: "#99147D"},
                    {carColor: "#15E6CD", linesColor: "#1CCAD8"},
                    {}]
            },
            {
                component: AnimatedBusCar,
                styles: [
                    {carColor: "#FF9914", linesColor:"#000FF0"},
                    {carColor: "#CFFFB3", linesColor:"#FF0000"},
                    {carColor: "#F7EF66", linesColor:"#00FF00"}
                ]
            },
            {
                component:AnimatedCityCars,
                styles: [
                    {carColor: "#47D2A5", linesColor: "#35CA99"},
                    {carColor: "#EF5562", linesColor: "#DB3D45"},
                    {carColor: "#30BCE9", linesColor: "#29A7D3"}
                    ]
            }]
    }

    render() {
        return <View style={style.animatedContainer} pointerEvents="none">
            {_.map(_.range(_.random(20, 30)), idx => {
                let car = _.sample(this.cars);
                let RandomCar = car.component;
                let carStyles = _.sample(car.styles);
                let randomSize = _.random(200, 300);
                return <RandomCar {...carStyles}{...{width: randomSize, height:randomSize}} key={idx}/>
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