// @flow
import React from "react"
import {Form, Item, Picker, Text, View} from "native-base"
import type {OptionField} from "./optionField"

const styles = {
    "wrapper": {flex: 1, flexDirection: "row", justifyContent: "space-between"}
}

type PickerInputProps = {
    options: Array<string>
} & OptionField<string>

const PickerInput = ({verbose, options, value, onChange}: PickerInputProps) => (
    <Form>
        <Text>{verbose}</Text>
        <View>
            <Picker selectedValue={value}
                    mode="dialog"
                    supportedOrientations={['portrait', 'landscape']}
                    onValueChange={onChange}
            >
                {options.map(option => <Item label={option} value={option} key={option}/>)}
            </Picker>
        </View>
    </Form>
)
export default PickerInput