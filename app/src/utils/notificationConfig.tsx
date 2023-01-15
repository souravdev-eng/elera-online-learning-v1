import messaging from '@react-native-firebase/messaging';
import {getFCMToken, setFCMToken, setIsTokenUpdate} from './storage';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    fetchFCMToken();
  }
};

const fetchFCMToken = async () => {
  let fcmToken = await getFCMToken();

  if (!fcmToken) {
    try {
      const tokenFCM = await messaging().getToken();
      if (tokenFCM !== null) {
        await setFCMToken(tokenFCM);
        await setIsTokenUpdate(tokenFCM);
      }
    } catch (error) {
      console.log(error, 'Error FCM token');
    }
  }
};

export const NotificationListener = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app open from quite state',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log(remoteMessage);
  });
};
