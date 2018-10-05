import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
import {BusCar,TaxiCar, CityCar, AmbulanceCar, TruckCar} from "../../svg/childishCar";
import withDriveRightAnimation from "./driveRightAnimation";
import _ from "lodash";

const AnimatedBusCar = withDriveRightAnimation(BusCar);
const AnimatedTaxiCar = withDriveRightAnimation(TaxiCar);
const AnimatedCityCars = withDriveRightAnimation(CityCar);
const AnimatedAmbulanceCar = withDriveRightAnimation(AmbulanceCar);
const AnimatedTruckCar = withDriveRightAnimation(TruckCar);

export default class ChildishCarsAnimated extends Component {

    constructor(props) {
        super(props);
        this.cars = [
            {
                component: AnimatedTaxiCar,
                styles: [
                    {carColor: "#1983db", detailsColor: "#0f53b7"},
                    {carColor: "#CC0099", detailsColor: "#99147D"},
                    {carColor: "#47D2A5", detailsColor: "#279772"},
                    {carColor: "#ecc142", detailsColor: "#000000"}
                ]
            },
             {
                component: AnimatedBusCar,
                styles: [
                    {carColor: "#1CCAD8"},
                    {carColor: "#D87805"},
                    {carColor: "#CC0099"},
                    {carColor: "#FFFFFF"}
                ]
            },
            {
                component:AnimatedCityCars,
                styles: [
                    {carColor: "#47D2A5"},
                    {carColor: "#EF5562"},
                    {carColor: "#30BCE9"},
                    {carColor: "#F7EF66"},
                    {carColor: "#99147D"}
                ]
            },
            {
                component:AnimatedAmbulanceCar,
                styles: [
                    {}
                ]
            },
            {
                component:AnimatedTruckCar,
                styles: [
                    {carColor: "#CC0099", darkerCarColor: "#99147D"},
                    {carColor: "#EF5562", darkerCarColor: "#DB3D45"},
                    {carColor: "#F7EF66", darkerCarColor: "#ecc142"},
                    {carColor: "#30BCE9", darkerCarColor: "#29A7D3"}
                ]
            }
        ];
    }

    render() {
        return <View style={style.animatedContainer} pointerEvents="none">
            {_.map(_.range(_.random(2, 4)), idx => {
                let car = _.sample(this.cars);
                let RandomCar = car.component;
                let carStyles = _.sample(car.styles);
                let randomSize = _.random(130, 180);
                return <RandomCar {...carStyles}{...{width: randomSize, height:randomSize}} key={idx}/>;
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