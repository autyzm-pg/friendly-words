import React from "react"
import {View} from "react-native"
import {Icon, Text} from "native-base"

import styles from "./sorterStyles"

export default Sorter = () => (
    <View style={styles.container}>
        <Text style={{textAlign: "right"}}>Sortuj alfabetycznie <Icon name="arrow-dropdown"/></Text>
    </View>
)