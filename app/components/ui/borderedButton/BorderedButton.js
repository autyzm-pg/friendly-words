import React from "react";
import PropTypes from "prop-types";
import {TouchableOpacity} from "react-native";
import Icon from "../Icon";
import colours from "../../../assets/colours";
import {isPhone} from "../../../services/deviceInfo";
import {RoundDashedBorder, RoundWrapper} from "./BorderedButton.styles";

export default BorderedButton = ({color, onPress, icon, disabled, size}) =>
  <TouchableOpacity onPress={onPress} disabled={disabled}>
		<RoundDashedBorder size={size}>
			<RoundWrapper size={size}>
        <Icon color={color || colours.dodgerBlue} size={ isPhone() ? 25 : 35} name={icon}/>
		</RoundWrapper>
		</RoundDashedBorder>
	</TouchableOpacity>

BorderedButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
	color: PropTypes.string,
	disabled: PropTypes.bool
};

