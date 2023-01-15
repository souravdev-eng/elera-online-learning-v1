import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFCMToken = async () => {
  try {
    const fcmToken = await AsyncStorage.getItem('fcmtoken');
    if (fcmToken !== null) {
      return fcmToken;
    }
    return null;
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const isFCMTokenUpdate = async () => {
  try {
    const fcmToken = await AsyncStorage.getItem('isTokenUpdate');
    if (fcmToken !== null) {
      return fcmToken;
    }
    return null;
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const setIsTokenUpdate = async (value: any) => {
  try {
    await AsyncStorage.getItem('isTokenUpdate', value);
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const setFCMToken = async (value: any) => {
  try {
    await AsyncStorage.setItem('fcmtoken', value);
  } catch (error) {
    console.log('ERROR', error);
  }
};
