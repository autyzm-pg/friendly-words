import React from "react"
import {CheckBox, Text} from "native-base"

export const SimpleCheckbox = ({value, onChange}) => (
    <CheckBox checked={value} onPress={() => onChange(!value)}/>
)

// export const SimpleCheckbox = ({value, onChange}) => (
//     <Text>{value.toString()}</Text>
// )