import React from "react"
import {Form} from "native-base"
import {Switch, View} from "react-native"
import FieldLabel from "../../components/ui/FieldLabel"
import {Containers} from "../../styles/containers"

const SwitchInput = ({verbose, value, onChange}) => (
    <View style={[Containers.inline, Containers.formField]}>
        <FieldLabel text={verbose}/>
        <Switch value={value} onValueChange={onChange}/>
    </View>
)
export default SwitchInput