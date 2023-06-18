import AsyncStorage from '@react-native-async-storage/async-storage';
export const FCMTokenKEY = 'fcmtoken';
export const IsTokenUpdateKEY = 'isTokenUpdate';

export const getFCMToken = async () => {
  try {
    const fcmToken = await AsyncStorage.getItem(FCMTokenKEY);
    return fcmToken;
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const isFCMTokenUpdate = async () => {
  try {
    const fcmToken = await AsyncStorage.getItem(IsTokenUpdateKEY);
    return fcmToken;
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const setIsTokenUpdate = async (value: any) => {
  try {
    await AsyncStorage.setItem(IsTokenUpdateKEY, value);
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const setFCMToken = async (value: any) => {
  try {
    await AsyncStorage.setItem(FCMTokenKEY, value);
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const clearAppData = async function () {
  try {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
  } catch (error) {
    console.error('Error clearing app data.');
  }
};
export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Data removed', key);
  } catch (err) {
    console.log(err);
  }
};
