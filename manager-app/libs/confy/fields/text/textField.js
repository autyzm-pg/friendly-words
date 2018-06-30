// @flow
import TextInput from "./TextInput"
import {Field} from "../fields"

export const TextField = Field(TextInput, {def: "", placeholder: undefined})