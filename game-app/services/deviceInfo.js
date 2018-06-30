import {Dimensions} from "react-native";

const mqPhone = 767;
const {width, height} = Dimensions.get("window");

const isPhone = () => width <= mqPhone;
const isAbovePhone = () => width >= mqPhone + 1;

console.log("Width:", width)

export {isPhone, isAbovePhone, width, height}

