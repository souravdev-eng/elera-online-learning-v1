/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import messaging from '@react-native-firebase/messaging';

import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
// Register background handler

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });

const AppProvider = () => {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent("elera", () => AppProvider);
