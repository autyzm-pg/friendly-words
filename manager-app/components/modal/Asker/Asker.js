import React from "react"
import {Text, View} from "native-base"
import {YesNoButtons} from "../askFactory"

export const Asker = ({children, onConfirm, onCancel, positive}) => (
    <View>
        <Text>{children}</Text>
        <YesNoButtons onCancel={onCancel} onConfirm={onConfirm} positive={positive}/>
    </View>
)