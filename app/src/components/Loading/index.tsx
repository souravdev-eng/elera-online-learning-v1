import {View, Text} from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <AnimatedLottieView
        source={require('../../assets/animation/loading.json')}
        loop
        autoPlay
      />
    </View>
  );
};

export default Loading;
