import colours from "../../../assets/colours";
import {isPhone} from "../../../services/deviceInfo";
import glamorous from "glamorous-native";

const buttonSize = size => size ? size : isPhone() ? 40 : 60;

export const RoundDashedBorder = glamorous.view({
    padding: 7,
    borderColor: colours.tulipTree,
    borderStyle: "dotted",
    borderWidth: 3,
}, ({size}) => (
    {
        borderRadius: buttonSize(size)
    }
));

export const RoundWrapper = glamorous.view({
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: colours.white
}, ({size}) => (
    {
        width: buttonSize(size),
        height: buttonSize(size),
        borderRadius: buttonSize(size)
    }
));