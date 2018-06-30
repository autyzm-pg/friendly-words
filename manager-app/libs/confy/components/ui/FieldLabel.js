import React from "react"
import {StyleSheet } from 'react-native';
import {Text} from "native-base"
import {FontSize} from "../../styles/constants"

export default FieldLabel = ({text}) => <Text style={styles.text}>{text}</Text>

const styles = StyleSheet.create({
   text: {
       fontSize: FontSize.label,
       marginBottom: 4
   }
});

