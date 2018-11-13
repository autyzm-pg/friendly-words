import React from 'react';
import {PixelRatio} from "react-native";
import {JumboHeader, Subheader} from "../components/ui/Header";
import {Text, View, Image} from "glamorous-native";
import Colors from "../assets/colours";
import {BlueBackground} from "../components/ui/FullBackground";
import {moderateScale} from "../services/scalign";
const SCREEN_TIMEOUT = 4000;
const NEXT_SCREEN = "Home";

const isHighResolutionScreen = () => PixelRatio.get() > 1;
const getLogosImagesPath = () => {
    const assetsPath = '../assets/images';
    return `${assetsPath}/${isHighResolutionScreen() ? 'loga@2x.png' : 'loga.png'}`;
}


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
            <View paddingHorizontal={moderateScale(36)} flex={1} justifyContent="center" paddingTop={moderateScale(20)}>
                <JumboHeader>Przyjazne Słowa</JumboHeader>
                <Subheader>projekt non profit</Subheader>
                <Text marginVertical={moderateScale(20)} fontSize={moderateScale(10)} lineHeight={moderateScale(16)} color={Colors.white}>
                    Aplikacje powstają w ramach wspólnego projektu „non-profit” Politechniki
                    Gdańskiej i Fundacji Instytut Wspomagania Rozwoju Dziecka w Gdańsku (www.iwrd.pl). W ramach projektu,
                    kierujemy się dwiema zasadami: non-profit oraz open-source. IWRD, Politechnika Gdańska ani żaden
                    uczestnik projektu nie odnosi materialnych korzyści z udziału w wytwarzaniu aplikacji.
                </Text>
            </View>
            <View marginTop={moderateScale(20)}
                  height={moderateScale(70)}
                  justifyContent="center"
                  backgroundColor={Colors.white}>
                <Image resizeMode="contain" height={moderateScale(60)} source={require("../assets/images/loga.png")} />
            </View>
        </BlueBackground>;

    }
}

export default SplashScreen;
