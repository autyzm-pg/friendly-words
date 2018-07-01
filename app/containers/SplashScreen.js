import React from 'react';
import {JumboHeader, Header} from "../components/ui/Header";
import {Text, View} from "glamorous-native";
import Colors from "../assets/colours";
import {BlueBackground} from "../components/ui/FullBackground";
import {moderateScale} from "../services/scalign";

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
            <View paddingHorizontal={moderateScale(36)} flex={1} paddingTop={moderateScale(20)}>
                <JumboHeader>Przyjazne Słowa</JumboHeader>
                <Header>projekt non profit</Header>
                <Text marginVertical={moderateScale(20)} fontSize={moderateScale(10)} lineHeight={moderateScale(16)} color={Colors.white}>
                    Aplikacje powstają w ramach wspólnego projektu „non-profit” Politechniki
                    Gdańskiej i Fundacji Instytut Wspomagania Rozwoju Dziecka w Gdańsku (www.iwrd.pl). W ramach projektu,
                    kierujemy się dwiema zasadami: non-profit oraz open-source. IWRD, Politechnika Gdańska ani żaden
                    uczestnik projektu nie odnosi materialnych korzyści z udziału w wytwarzaniu aplikacji.
                </Text>
            </View>
            <View paddingHorizontal={moderateScale(36)} marginTop={moderateScale(20)} paddingVertical={moderateScale(20)} backgroundColor={Colors.white}><Text>some logos</Text></View>
        </BlueBackground>;

    }
}

export default SplashScreen;