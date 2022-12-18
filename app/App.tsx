import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'new NativeEventEmitter',
]);

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store/store';
import MainNavigation from './src/navigation/MainNavigation';
import {StripeProvider} from '@stripe/stripe-react-native';

const App = () => {
  return (
    <StripeProvider publishableKey="pk_test_51JOBJnSA4EPPqs66VxVusJrEerUnYWuDGHkzasE78kNncq9UgLx4PwQdU8XPpn41qwz1vhNsxcY14rSQ7fC0c0gt00lNQYG9wa">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    </StripeProvider>
  );
};

export default App;
