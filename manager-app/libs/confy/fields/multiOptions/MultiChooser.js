// @flow
import React from "react"
import {Text, View} from "native-base"
import {FieldProps} from "../fields";
import {StyleSheet} from "react-native";
import {MultiOptions, SimpleOption} from "../../components/ui/MultiOptions";

type MultiChooserProps = {
    options: Array<string>
} & FieldProps<Array<string>>

export const MultiChooser = ({value, onChange, options, verbose}: MultiChooserProps) =>
    <View>
        <Text style={{marginBottom: 10}}>{verbose}</Text>
        <MultiOptions style={styles.container} value={value} onChange={onChange}>
            {options.map(option => <SimpleOption key={option} value={option} label={option} />)}
        </MultiOptions>
    </View>


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    }
});