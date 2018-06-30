import {StyleSheet} from "react-native"

export default styles = StyleSheet.create({
    outerContainer: {
        flexDirection:"row",
        justifyContent: "center"
    },
    container: {
        flex:1,
        maxWidth: 500,
        padding: 10,
    },

    informationContainer: {
        flexDirection: "row",
        backgroundColor: "#f1f1f1",
        padding: 20,
        marginTop: 15,
    },

    informationIcon: {
        flex: 0,
        width:50,
        justifyContent: "flex-start",
    },

    informationText: {
        flex: 1,
        color: "#2f2f2f"
    }
})
