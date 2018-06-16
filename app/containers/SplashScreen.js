import React from 'react';
import {JumboHeader} from "../components/ui/Header";
import CapriolaText from "../components/ui/CapriolaText";
import {Text, View} from "glamorous-native";
import Colors from "../assets/colours";
import {BlueBackground} from "../components/ui/FullBackground";

const SCREEN_TIMEOUT = 4000;
const NEXT_SCREEN = "Home";

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.timeoutId = null;
    }

    componentDidMount() {
        const {navigation} = this.props;
        this.timeoutId = setTimeout(() => navigation.navigate(NEXT_SCREEN), SCREEN_TIMEOUT)
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }

    render() {
        return <BlueBackground>
            <View paddingHorizontal={90} paddingTop={120}>
            <JumboHeader>Przyjazne Słowa</JumboHeader>
            <CapriolaText fontSize={36}>projekt non profit</CapriolaText>
            <Text marginVertical={80} fontSize={24} lineHeight={36} color={Colors.white}>Aplikacje powstają w ramach wspólnego projektu „non-profit” Politechniki
                Gdańskiej i Fundacji Instytut Wspomagania Rozwoju Dziecka w Gdańsku (www.iwrd.pl). W ramach projektu,
                kierujemy się dwiema zasadami: non-profit oraz open-source. IWRD, Politechnika Gdańska ani żaden
                uczestnik projektu nie odnosi materialnych korzyści z udziału w wytwarzaniu aplikacji.</Text>
            </View>
            <View paddingHorizontal={90} flex={1} paddingVertical={45} backgroundColor={Colors.white}><Text>some logos</Text></View>
        </BlueBackground>;

    }
}

export default SplashScreen;