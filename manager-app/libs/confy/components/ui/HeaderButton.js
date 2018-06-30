import React from "react"
import {Button, Text} from "native-base"

export const HeaderButton = ({action, text}) => <Button small onPress={action}><Text>{text}</Text></Button>