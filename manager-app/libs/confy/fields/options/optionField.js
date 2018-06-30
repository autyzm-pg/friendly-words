// @flow
import PickerInput from "./PickerInput"
import {Field} from "../fields"

export const OptionField = (title, settings, ...args) => Field(PickerInput, {
    def: settings.options[0],
    options: []
})(title, settings, ...args)