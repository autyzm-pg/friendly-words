import React from 'react'
import {Button, StatusBar, TouchableOpacity, Linking} from 'react-native'
import {Layout} from "./Game"
import {View} from "glamorous-native"
import CapriolaText from "../components/ui/CapriolaText"
import * as constants from "../../android/app/src/main/res/constantStrings";

export default ErrorScreen = () =>
    <Layout>
        <View flex={1} alignItems={"center"} justifyContent={"space-around"}>
            <CapriolaText>{constants.CantLoadFile}</CapriolaText>
            <CapriolaText>{constants.RestartAplication}</CapriolaText>
            <CapriolaText>{constants.ContactUs}</CapriolaText>
            <TouchableOpacity
                onPress={() => Linking.openURL('mailto:autyzmpg@gmail.com?subject=Uprawnienia+do+zapisu')}>
                <CapriolaText>autyzmpg@gmail.com</CapriolaText>
            </TouchableOpacity>

        </View>
    </Layout>
