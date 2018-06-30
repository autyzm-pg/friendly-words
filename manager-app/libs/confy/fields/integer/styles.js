import {StyleSheet} from "react-native"

const inputHeight = 50

export default StyleSheet.create({
    fieldContainer: {
        margin: 4,
    },
    inputContainer: {
        flexDirection: "row"
    },
    button: {
        width: inputHeight,
        height: inputHeight,
        padding: 10,
        backgroundColor: "#d9d9d9",
        borderColor: "#a2a2a2",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 30
    },
    item: {
        height: inputHeight,
        flex: 1,
    },
    input: {
        height: inputHeight,
        textAlign: "center",
        fontSize: 20,
    }
})