import {StyleSheet} from "react-native"
import {SCREEN_PADDING} from "../../assets/styleConstants"

export const ContainerStyles = StyleSheet.create({
    fullSizeContainer: {
        flex: 1
    },
    paddedContainer: {
        padding: 10,
        flex: 1
    },
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})