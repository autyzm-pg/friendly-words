import React from "react"
import styles from "./styles"
import {Form, Input, Item} from "native-base"
import {Text, TouchableOpacity, View, Slider} from "react-native"
import FieldLabel from "../../components/ui/FieldLabel"
import R from "ramda"
import {withLink} from "../../libs/withState"
import {Containers} from "../../styles/containers"

const not = R.complement
const hasUnit = unit => !(R.isEmpty(unit) || R.isNil(unit))

const onValueChange = (onChange, min, max) => R.when(
    newValue => newValue >= min && newValue <= max,
    newValue => onChange(newValue)
)

const onTextChange = (onChange, unit) => R.pipe(
    R.when(
        () => hasUnit(unit),
        value => value.replace(unit, "")
    ),
    parseInt,
    R.when(
        not(isNaN),
        value => onChange(value)
    )
)

const SimpleIntegerInput = ({verbose, value, onChange, min, max, unit, isFocused, isFocusedChange}) => {
    const validatedOnChange = onValueChange(onChange, min, max)
    const parsedOnChange = onTextChange(validatedOnChange, unit)

    const valueWithUnit = `${value}` + ((!isFocused && hasUnit(unit)) ? ` ${unit}` : "")

    return (
        <View style={Containers.formField}>
            <FieldLabel text={verbose}/>
            <Form style={styles.inputContainer}>
                <TouchableOpacity style={styles.button} onPress={() => validatedOnChange(value - 1)}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Item regular style={styles.item}>
                    <Input onFocus={() => isFocusedChange(true)} onBlur={() => isFocusedChange(false)}
                           style={styles.input}
                           keyboardType={"numeric"}
                           value={valueWithUnit} onChangeText={parsedOnChange}/>
                </Item>
                <TouchableOpacity style={styles.button} onPress={() => validatedOnChange(value + 1)}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </Form>
        </View>
    )
}

const IntegerSlider = ({verbose, value, onChange, min, max, units, isFocused, isFocusedChange}) => {
    return <View style={Containers.formField}>
        <FieldLabel text={verbose}/>
        <Text>{value}{units ? ` ${units}` : ""}</Text>
        <Slider minimumValue={min} maximumValue={max} onValueChange={onChange} value={value} step={1} />
    </View>
}
export const IntegerInput = withLink("isFocused", false)(IntegerSlider)
//export const IntegerInput = withLink("isFocused", false)(withLog(SimpleIntegerInput))