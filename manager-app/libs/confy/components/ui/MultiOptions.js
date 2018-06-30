import React from "react"
import {
	CheckBox
} from 'native-base'
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native"
import R, {contains} from "ramda"

export const MultiOptions = ({value, onChange, children, style}) => {

	const onChangeHandler = (changedVal) => {
		const newValue = contains(changedVal, value)
			? R.without([changedVal], value)
			: R.append(changedVal, value);
		onChange(newValue);
	};

	return (
		<View style={style}>
			{React.Children.map(children, child =>
					React.cloneElement(child, {
						isChecked: contains(child.props.value, value),
						onPress: () => onChangeHandler(child.props.value)
					})
			)}
		</View>
	);
};

export const Option = ({isChecked, onPress, label, checkboxStyle, style }) => {
	label = R.is(String, label) ? <Text>{label}</Text> : label;
	return <TouchableOpacity style={style} onPress={onPress}>
		<CheckBox style={checkboxStyle} checked={isChecked} />
		{label}
	</TouchableOpacity>
};

export const SimpleOption = (props) => {
	const {isChecked, label, ...rest} = props
	const boxedLabel = <View style={[styles.simpleOption, isChecked && styles.checkedOption]}><Text>{label}</Text></View>;
	return <Option {...rest} label={boxedLabel} checkboxStyle={styles.checkbox}/>
}

export const ImageOption = ({src, size, ...rest}) => {
	const {isChecked} = rest
	const label = <Image source={src} style={[{width: size, height: size}, isChecked && {transform: [{scale: 0.8}]}]}/>

	return <Option {...rest} label={label} />
};

export const ColorOption = ({hex, ...rest}) => {
	const label = <View style={{backgroundColor: hex, height: 50, width: 50, borderRadius: 100}} />;
	return <Option {...rest} label={label} />
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    },

    simpleOption: {
        padding: 10,
		borderRadius: 4,
		overflow: "hidden",
		borderWidth: 1,
		backgroundColor: "white",
		borderColor: "gray",
		minWidth: 48,
		alignItems: "center",
		marginHorizontal: 3
    },

	checkedOption: {
    	backgroundColor: "rgba(63, 81, 181, 0.1)",
		borderColor: "#007aff",
	},

    checkbox: {
		display: "none"
    }
});