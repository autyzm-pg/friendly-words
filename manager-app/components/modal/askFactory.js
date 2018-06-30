import React from "react"
import {View} from "react-native"
import {Button, Form, Input, Item, Text} from "native-base"

const askerStyles = {
    buttonsWrapper: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 20,
    },
    buttons: {
        alignSelf: "auto"
    },
    buttonNo: {},
    buttonYes: {
        marginLeft: 10,
    }
}

export const Buttons = (positiveText, negativeText) => ({onCancel, onConfirm, positive}) =>
    <View style={askerStyles.buttonsWrapper}>
        <Button transparent={positive} style={{...askerStyles.buttons, ...askerStyles.buttonNo}}
                onPress={onCancel}><Text>{negativeText}</Text></Button>
        <Button transparent={!positive} style={{...askerStyles.buttons, ...askerStyles.buttonYes}}
                onPress={onConfirm}><Text>{positiveText}</Text></Button>
    </View>

export const YesNoButtons = Buttons("Tak", "Nie")
export const SaveButtons = Buttons("Zapisz", "Anuluj")

export const askFactory = actions => AskerComponent => (question, positive = true) => new Promise((resolve, reject) =>
    actions.show(
        <AskerComponent onConfirm={value => {
            resolve({type: "confirm", value})
            actions.hide()
        }} onCancel={value => {
            resolve({type: "cancel", value})
            actions.hide()
        }} positive={positive}>
            {question}
        </AskerComponent>
    ))