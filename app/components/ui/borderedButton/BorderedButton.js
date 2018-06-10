import React from "react";
import PropTypes from "prop-types";
import {TouchableOpacity} from "react-native";
import Icon from "../Icon";
import colours from "../../../assets/colours";
import {RoundDashedBorder, RoundWrapper} from "./BorderedButton.styles";

export default BorderedButton = ({color, onPress, icon, disabled, size, iconSize = 35}) =>
  <TouchableOpacity onPress={onPress} disabled={disabled}>
		<RoundDashedBorder size={size}>
			<RoundWrapper size={size}>
        <Icon color={color || colours.dodgerBlue} size={ iconSize } name={icon}/>
		</RoundWrapper>
		</RoundDashedBorder>
	</TouchableOpacity>

BorderedButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
	color: PropTypes.string,
	disabled: PropTypes.bool
};

export const PlayButton = ({onPress}) => <TouchableOpacity onPress={onPress}>
    <RoundDashedBorder size={300} padding={10} borderWidth={5}>
        <RoundWrapper size={300}>
            <Icon color={colours.apple} size={160} name={"play"}/>
        </RoundWrapper>
    </RoundDashedBorder>
</TouchableOpacity>;