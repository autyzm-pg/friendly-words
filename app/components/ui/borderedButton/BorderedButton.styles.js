import colours from "../../../assets/colours";
import glamorous from "glamorous-native";

export const RoundDashedBorder = glamorous.view({
    padding: 7,
    borderColor: colours.tulipTree,
    borderStyle: "dotted",
    borderWidth: 3,
}, ({size}) => (
    {
        borderRadius: size
    }
));

export const RoundWrapper = glamorous.view({
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: colours.white
}, ({size}) => (
    {
        width: size,
        height: size,
        borderRadius: size
    }
));