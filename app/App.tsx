import {View, Text, LogBox} from 'react-native';
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);
import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <>
      <MainNavigation />
    </>
  );
};

export default App;
