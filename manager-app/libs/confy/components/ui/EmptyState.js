import React from "react"
import {Text, Button, View} from 'native-base'
import {StyleSheet} from "react-native"
import {Containers} from "../../styles/containers"
import {moderateScale} from "../../../scaling";
import Icon from "react-native-vector-icons/FontAwesome"

export const EmptyState  = ({icon, description, action, actionLabel}) =>
    <View onPress={action} style={[Containers.full, Containers.centered]}>
        {icon && <View style={[style.roundContainer, Containers.centered]}>
            <Icon name={icon} size={moderateScale(60)} color={"#2196F3"}/>
        </View>}
        {description && <Text>{description}</Text>}
        {actionLabel && <Button style={{alignSelf: "center", marginTop: moderateScale(20)}} onPress={action}><Text>{actionLabel}</Text></Button>}
    </View>

const iconContainerSize = moderateScale(120);

const style = StyleSheet.create({
    roundContainer: {
        padding: 20,
        width: iconContainerSize,
        height: iconContainerSize,
        backgroundColor: "#F7F9FF",
        borderRadius: iconContainerSize,
        marginBottom: 20
    }
})