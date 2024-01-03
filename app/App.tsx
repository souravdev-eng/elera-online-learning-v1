import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'new NativeEventEmitter',
]);

import React, { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
// import { StripeProvider } from '@stripe/stripe-react-native';

import MainNavigation from './src/navigation/MainNavigation';
import { persistor } from './src/store/store';
// import {
//   NotificationListener,
//   requestUserPermission,
// } from './src/utils/notificationConfig';
import { useFCMToken } from './src/hooks/useFCMToken';
// import { STRIPE_PUBLIC_KEY } from '@env';

const App = () => {
  const { updateFCMToken, getTokens, fcmToken, isFCMToken } = useFCMToken();
  // useEffect(() => {
  //    requestUserPermission();
  //    NotificationListener();
  //    getTokens();

  //   if (fcmToken !== null && isFCMToken === null) {
  //     updateFCMToken();
  //   }
  // }, [fcmToken, isFCMToken]);

  return (
    // <StripeProvider publishableKey={STRIPE_PUBLIC_KEY}>
    <PersistGate loading={null} persistor={persistor}>
      <MainNavigation />
    </PersistGate>
    // </StripeProvider>
  );
};

export default App;
