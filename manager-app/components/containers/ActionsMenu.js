import React from "react"
import * as R from "ramda"
import {Button, Icon, View} from "native-base"

const colorLens = R.lensPath(['style','color'])
const disabledColor = "#aaaaaa"

export const ActionItem = ({onSelect, children, isEnabled = true}) => (
    <Button disabled={!isEnabled} onPress={onSelect} transparent style={{marginLeft: 5}}>
        {isEnabled ?
            children :
            React.Children.map(children, child => React.cloneElement(
                child,
                R.set(colorLens, disabledColor, child.props)
            ))
        }
    </Button>
)

export const ActionsMenu = ({children}) => (
    <View style={{flex: 1, flexDirection: "row"}}>
        {children}
    </View>
)