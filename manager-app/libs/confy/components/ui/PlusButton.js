import React from "react"
import {Button, Text} from "native-base"

const styles = {
    button: {
        backgroundColor: "#ff01a7",
        borderRadius: 200,
        width: 50,
        height: 50
    },
    x: {
        fontSize: 32,
        color: "#FFF"
    }
}

export const PlusButton = ({onPress, style}) => (
    <Button style={{...styles.button, ...style}} onPress={onPress}>
        <Text style={styles.x}>+</Text>
    </Button>
)