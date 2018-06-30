import React from "react"
import {Item, List, ListItem, Picker, Right, Text, View} from "native-base"
import * as R from "ramda"
import {ScrollView, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 5,
    }
})

export const ListPage = ({fields, renderField, config}) => (
    <ScrollView style={styles.page}>
        {
            fields.map(renderField)
        }
    </ScrollView>
)