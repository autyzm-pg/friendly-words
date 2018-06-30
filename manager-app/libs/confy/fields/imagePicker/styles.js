const imageCardSize = 200

const imageCardContainerPadding = 10
const imageCardContainerBorder = 1

export const imagePickerStyles = {
    container: {
        padding: 15,
        margin: 10
    },
    imagesContainer: {
        backgroundColor: "#cecece",
        minHeight: 300,
        marginTop: 17,
        alignContent: "center",
        padding: 16,
        paddingBottom: 10,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    image: {
        height: imageCardSize,
        width: imageCardSize,
        alignSelf: "center",
    },
    addButton: {
        marginLeft: 10,
        height: 28
    },
    imageContainer: {
        borderWidth: imageCardContainerBorder,
        borderColor: "#000",
        borderRadius: 10,
        padding: imageCardContainerPadding,
        height: imageCardSize + (imageCardContainerBorder + imageCardContainerPadding) * 2,
        width: imageCardSize + (imageCardContainerBorder + imageCardContainerPadding) * 2,
        alignContent: "center",
        justifyContent: "center",
        margin: 10,
    },
    emptyText: {
        fontSize: 48,
        color: "#FFF",
        alignSelf: "center"
    },
    deleteButton: {
        position: "absolute",
        top: 0,
        right: 0,
    },
}