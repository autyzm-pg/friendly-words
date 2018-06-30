import React from "react"
import {Button, List, ListItem, Text, View} from "native-base"
import * as R from "ramda"

export const ObjectListInput = ({verbose, model, childRenderer, hiddenFields}) => (
    <View>
        <Text>{verbose}</Text>
        <View>
            {R.values(R.omit(hiddenFields, model.fields)).map(field => (
                <View key={field.name}>
                    {childRenderer(field)}
                </View>
            ))}
        </View>
    </View>
)