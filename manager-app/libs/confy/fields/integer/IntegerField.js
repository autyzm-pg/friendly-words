import {Field} from "../fields"
import {IntegerInput} from "./IntegerInput"

export const IntegerField = Field(IntegerInput, {def: 0, units: "", min: 0, max: 32000})