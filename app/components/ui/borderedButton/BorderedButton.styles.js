import colours from "../../../assets/colours";
import {isPhone} from "../../../services/deviceInfo";
import glamorous from "glamorous-native";

const buttonSize = isPhone() ? 40 : 60;

export const RoundDashedBorder = glamorous.view({
  padding: 7,
  borderColor: colours.tulipTree,
  borderStyle: "dotted",
  borderWidth: 3,
  borderRadius: buttonSize
});

export const RoundWrapper = glamorous.view({
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width: buttonSize,
  height: buttonSize,
  borderRadius: 100,
  backgroundColor: colours.white
});