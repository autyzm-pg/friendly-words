import React from "react"
import {View} from "native-base"

export const SinglePage = ({field, renderField, config}) => (
    <View style={{flex: 1}}>
        {renderField(field)}
    </View>
)