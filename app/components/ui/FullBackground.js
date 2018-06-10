import React from 'react';
import glamorous from 'glamorous-native';
import Colours from "../../assets/colours";

const {View, Image} = glamorous;

export const FullBackground = ({children, backgroundSrc}) =>
  <BlueBackground justifyContent={'center'} alignItems={'center'}>
    <View position={'absolute'} top={0} left={0} width={'100%'} height={'100%'} opacity={0.23}>
      <Image source={backgroundSrc} resizeMode={'cover'} flex={1} alignSelf={'stretch'} width={undefined} height={undefined}/>
    </View>
    {children}
  </BlueBackground>;

export const BlueBackground = glamorous.view({backgroundColor: Colours.dodgerBlue, flex: 1});
