import React from "react"
import glamorous from "glamorous-native";
import colours from "../../assets/colours";

export default CapriolaText = glamorous.text({
    fontFamily: "capriola-regular",
    fontSize: 18,
    color: colours.white
});

CapriolaText.propsAreStyleOverrides = true;