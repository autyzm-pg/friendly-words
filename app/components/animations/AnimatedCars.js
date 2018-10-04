import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {BusCar, MiniBusCar, CityCar, ExcavatorCar, GarbageTruckCar, TramCar, TruckCar} from "../../svg/cars";
import withDriveRightAnimation from "./driveRightAnimation";
import _ from "lodash";

const AnimatedBusCar = withDriveRightAnimation(BusCar);
const AnimatedMiniBusCar = withDriveRightAnimation(MiniBusCar);
const AnimatedCityCars = withDriveRightAnimation(CityCar);
const AnimatedExcavatorCar = withDriveRightAnimation(ExcavatorCar);
const AnimatedTramCar = withDriveRightAnimation(TramCar);
const AnimatedGarbageTruckCar = withDriveRightAnimation(GarbageTruckCar);
const AnimatedTruckCar = withDriveRightAnimation(TruckCar);

export default class CarsAnimated extends Component {

    constructor(props) {
        super(props);
        this.cars = [
            {
                component: AnimatedMiniBusCar,
                styles: [
                    {carColor: "#1983db", linesColor: "#0f53b7"},
                    {carColor: "#CC0099", linesColor: "#99147D"},
                    {carColor: "#91E086", linesColor: "#87CC7E"}
                    ]
            },
            {
                component: AnimatedBusCar,
                styles: [
                    {carColor: "#15E6CD", linesColor: "#1CCAD8"},
                    {carColor: "#FF9914", linesColor:"#D87805"},
                    {carColor: "#CC0099", linesColor: "#99147D"}
                ]
            },
            {
                component:AnimatedCityCars,
                styles: [
                    {carColor: "#47D2A5", linesColor: "#35CA99"},
                    {carColor: "#EF5562", linesColor: "#DB3D45"},
                    {carColor: "#30BCE9", linesColor: "#29A7D3"}
                    ]
            },
            {
                component:AnimatedExcavatorCar,
                styles: [
                    {carColor: "#47D2A5", darkerCarColor: "#35CA99"},
                    {carColor: "#EF5562", darkerCarColor: "#DB3D45"},
                    {carColor: "#30BCE9", darkerCarColor: "#29A7D3"},
                    {carColor: "#FF9914", darkerCarColor: "#D87805"},
                    {carColor: "#F7EF66", darkerCarColor: "#ecc142"},
                ]
            }
            ,
            {
                component:AnimatedGarbageTruckCar,
                styles: [
                    {carColor: "#47D2A5", darkerCarColor: "#35CA99",
                        containerColor:"#DCDBDE", containerLinesColor :"#CAC9CD"},
                    {carColor: "#EF5562", darkerCarColor: "#DB3D45",
                        containerColor:"#CAC9CD", containerLinesColor :"#736F7A"},
                    {carColor: "#30BCE9", darkerCarColor: "#29A7D3",
                        containerColor:"#DCDBDE", containerLinesColor :"#CAC9CD"}
                ]
            },
            {
                component:AnimatedTramCar,
                styles: [
                    {carColor: "#47D2A5", linesColor : "#279772",
                        darkerCarColor: "#32BF91"},
                    {carColor: "#EF5562", linesColor : "#FFAB3E",
                        darkerCarColor: "#DB3D45"},
                    {carColor: "#30BCE9", linesColor : "#2083A7",
                        darkerCarColor: "#29A7D3"}
                ]
            },
            {
                component:AnimatedTruckCar,
                styles: [
                    {carColor: "#CC0099", darkerCarColor: "#99147D",
                        containerColor:"#DCDBDE", containerLinesColor :"#CAC9CD"},
                    {carColor: "#EF5562", darkerCarColor: "#DB3D45",
                        containerColor:"#CAC9CD", containerLinesColor :"#736F7A"},
                    {carColor: "#F7EF66", darkerCarColor: "#ecc142",
                        containerColor:"#CAC9CD", containerLinesColor :"#736F7A"},
                    {carColor: "#30BCE9", darkerCarColor: "#29A7D3",
                        containerColor:"#DCDBDE", containerLinesColor :"#CAC9CD"}
                ]
            }
        ]
    }

    render() {
        return <View style={style.animatedContainer} pointerEvents="none">
            {_.map(_.range(_.random(2, 4)), idx => {
                let car = _.sample(this.cars);
                let RandomCar = car.component;
                let carStyles = _.sample(car.styles);
                let randomSize = _.random(130, 180);
                return <RandomCar {...carStyles}{...{width: randomSize, height:randomSize}} key={idx}/>
            })
            }
        </View>;
    }
}

const style = StyleSheet.create({
    animatedContainer: {
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    }
});