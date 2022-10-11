import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'new NativeEventEmitter',
]);

import React, {useEffect} from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

import Demo from './src/Demo';
import {StripeProvider} from '@stripe/stripe-react-native';

const App = () => {
  return (
    <StripeProvider
      publishableKey="demo"
      //urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.elera" // required for Apple Pay
    >
      <Demo />
    </StripeProvider>
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <MainNavigation />
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
