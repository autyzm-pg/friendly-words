import React from 'react'
import {Button, StatusBar, TouchableOpacity, Linking} from 'react-native'
import {Layout} from "./Game"
import {View} from "glamorous-native"
import CapriolaText from "../components/ui/CapriolaText"

export default ErrorScreen = () =>
    <Layout>
        <View flex={1} alignItems={"center"} justifyContent={"space-around"}>
            <CapriolaText>Nie można wczytać pliku z konfiguracją - brak uprawnień do zapisu pliku.</CapriolaText>
            <CapriolaText>Uruchom ponownie aplikację i zaakceptuj prośbę o uzyskanie uprawnień.</CapriolaText>
            <CapriolaText>W razie problemów skontaktuj się z nami:</CapriolaText>
            <TouchableOpacity
                onPress={() => Linking.openURL('mailto:autyzmpg@gmail.com?subject=Uprawnienia+do+zapisu')}>
                <CapriolaText>autyzmpg@gmail.com</CapriolaText>
            </TouchableOpacity>

        </View>
    </Layout>
