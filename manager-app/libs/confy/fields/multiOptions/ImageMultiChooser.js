// @flow
import React from "react"
import {Text, View} from "native-base"
import {FieldProps} from "../fields"
import {StyleSheet} from "react-native"
import {MultiOptions, ImageOption} from "../../components/ui/MultiOptions"
import * as R from "ramda"
import {pick} from "ramda"

type ImageMultiChooserProps = {
    options: Array<string>
} & FieldProps<Array<string>>

export const ImageMultiChooser = ({verbose, value, onChange, options}: ImageMultiChooserProps) =>
    <View>
        <Text>{verbose}</Text>
        <MultiOptions style={styles.container} value={value} onChange={onChange}>
            {options.map(pick(['uri'])).map((option, idx) => <ImageOption style={styles.imageOption} size={150} key={idx}
                                                                   src={option} value={option}
                                                                   checkboxStyle={styles.checkbox}/>)}
        </MultiOptions>
    </View>


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    },

    imageOption: {
        backgroundColor: "#eee",
        margin: 12,
        padding: 1,
    },

    checkbox: {
        position: "absolute",
        zIndex: 1,
        top: 8,
    }
})