import React from 'react';
import { StatusBar } from 'react-native';
import { SectionView, SectionImage } from './styles';
import SplashLogo from '../../assets/SevenHousesLogo.png';

export const SplashScreen = () => {
  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={SplashLogo} resizeMode="contain" />
    </SectionView>
  );
};