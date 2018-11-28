import React from "react";
import CapriolaText from "./CapriolaText";
import glamorous from "glamorous-native";
import {moderateScale} from "../../services/scalign";

export const Subheader = glamorous(CapriolaText)({fontSize: moderateScale(20)});

export const Header = glamorous(CapriolaText)({fontSize: moderateScale(26)});
Header.propsAreTextOverrides = true;
export const JumboHeader = glamorous(CapriolaText)({fontSize: moderateScale(30)});
export const Configurationheader = glamorous(CapriolaText)({fontSize: moderateScale(11), opacity: 0.5});
