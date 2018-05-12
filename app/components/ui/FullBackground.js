import React from 'react';
import {View, Image} from 'glamorous-native';
import Colours from "../../assets/colours";

export const FullBackground = ({children, backgroundSrc}) =>
  <View	backgroundColor={Colours.dodgerBlue} flex={1} justifyContent={'center'} alignItems={'center'}>
    <View position={'absolute'} top={0} left={0} width={'100%'} height={'100%'} opacity={0.23}>
      <Image source={backgroundSrc} resizeMode={'cover'} flex={1} alignSelf={'stretch'} width={undefined} height={undefined}/>
    </View>
    {children}
  </View>
