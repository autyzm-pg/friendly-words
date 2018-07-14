import React from 'react';
import glamorous from 'glamorous-native';
import Colours from "../../assets/colours";
import {moderateScale} from "../../services/scalign";

const {View, Image} = glamorous;

export const FullBackground = ({children, backgroundSrc}) =>
  <BlueBackground justifyContent={'center'} alignItems={'center'}>
    <View position={'absolute'} top={0} left={0} width={'100%'} height={'100%'} opacity={0.23}>
      <Image source={backgroundSrc} resizeMode={'cover'} flex={1} alignSelf={'stretch'} width={undefined} height={undefined}/>
    </View>
      <View padding={moderateScale(20)} flex={1} alignSelf={'stretch'}>
        {children}
      </View>
  </BlueBackground>;

export const BlueBackground = glamorous.view({backgroundColor: Colours.dodgerBlue, flex: 1});
