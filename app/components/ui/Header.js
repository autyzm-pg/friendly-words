import CapriolaText from "./CapriolaText";
import glamorous from "glamorous-native";
import colors from "../../assets/colours";
import {isPhone} from "../../services/deviceInfo";

export const Header = glamorous(CapriolaText)({
  color: colors.white,
  fontSize: isPhone() ? 35 : 50,
});