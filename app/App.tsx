import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'new NativeEventEmitter',
]);

import React, {useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {StripeProvider} from '@stripe/stripe-react-native';

import MainNavigation from './src/navigation/MainNavigation';
import {persistor, store} from './src/store/store';
import {
  NotificationListener,
  requestUserPermission,
} from './src/utils/notificationConfig';
import {useAppDispatch, useAppSelector} from './src/hooks/useRedux';
import {updateUserFCMToken} from './src/store/actions/user.action';
import {getFCMToken, isFCMTokenUpdate} from './src/utils/storage';

const App = () => {
  const {data} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const updateFCM = async () => {
    const fcmToken = await getFCMToken();
    const isFCMToken = await isFCMTokenUpdate();

    if (isFCMToken === null) {
      if (fcmToken) {
        console.log(fcmToken);
        dispatch(updateUserFCMToken({fcmToken, token: data?.token!}));
      }
    }
  };

  useEffect(() => {
    requestUserPermission();
    NotificationListener();
    updateFCM();
  }, []);

  return (
    <StripeProvider publishableKey="pk_test_51JOBJnSA4EPPqs66VxVusJrEerUnYWuDGHkzasE78kNncq9UgLx4PwQdU8XPpn41qwz1vhNsxcY14rSQ7fC0c0gt00lNQYG9wa">
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </StripeProvider>
  );
};

export default App;
