// @flow
import React from "react"
import {Form, Input, Item, Left, Right, View} from "native-base"
import type {FieldProps} from "../fields"
import FieldLabel from "../../components/ui/FieldLabel"

type TextInputProps = { placeholder: ?string } & FieldProps<string>

const TextInput = ({value, verbose, onChange, placeholder}: TextInputProps) => (
    <Form>
        <FieldLabel text={verbose}/>
        <Item regular>
            <Input placeholder={placeholder} value={value} onChangeText={onChange}/>
        </Item>
    </Form>
)

export default TextInput