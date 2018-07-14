import React from "react"
import glamorous from "glamorous-native";
import colours from "../../assets/colours";
import {moderateScale} from "../../services/scalign";

export default CapriolaText = glamorous.text({
    fontFamily: "Capriola-Regular",
    fontSize: moderateScale(12),
    color: colours.white
});

CapriolaText.propsAreStyleOverrides = true;