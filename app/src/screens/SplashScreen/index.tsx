import {View, Image} from 'react-native';
import React from 'react';
import {Icons} from '../../theme';
import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Icons.logoWhite} style={styles.icon} />
    </View>
  );
};

export default SplashScreen;
