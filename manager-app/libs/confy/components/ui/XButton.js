import React from "react"
import {StyleSheet, TouchableOpacity} from "react-native"
import {Text} from "native-base"
import Icon from "react-native-vector-icons/FontAwesome"

const styles = StyleSheet.create({
    button: {
        padding: 8
    }
})

const smallStyles = StyleSheet.create({
    x: {
        fontSize: 16
    }
})

export const XButton = ({onPress, style, small}) => (
    <TouchableOpacity style={[styles.button, small && smallStyles.button, style]} onPress={onPress}>
        <Icon name="times-circle" size={26} color={"#2196F3"}/>
    </TouchableOpacity>
)