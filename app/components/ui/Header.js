import React from "react";
import CapriolaText from "./CapriolaText";
import glamorous from "glamorous-native";
import {moderateScale} from "../../services/scalign";

export const Header = glamorous(CapriolaText)({fontSize: moderateScale(20) });
export const JumboHeader = glamorous(CapriolaText)({fontSize: moderateScale(30)});