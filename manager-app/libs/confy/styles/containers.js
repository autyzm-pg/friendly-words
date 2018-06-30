import {StyleSheet} from "react-native"

export const Containers = StyleSheet.create({
    inline: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    full: {
      flex: 1,
        alignItems: "stretch"
    },

    centered: {
        alignItems: "center",
        justifyContent: "center"
    },

    formField: {
        flex: 1,
        marginVertical: 20
    }
})

