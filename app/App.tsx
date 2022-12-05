import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'new NativeEventEmitter',
]);

import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import Demo from './src/Demo';

const App = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <MainNavigation />
    //   </PersistGate>
    // </Provider>
    <Demo />
  );
};

export default App;
