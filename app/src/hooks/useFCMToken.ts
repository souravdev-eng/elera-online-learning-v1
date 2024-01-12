import {useCallback, useEffect, useState} from 'react';
import {updateUserFCMToken} from '../store/actions/user.action';
import {getFCMToken, isFCMTokenUpdate} from '../utils/storage';
import {useAppDispatch, useAppSelector} from './useRedux';

export const useFCMToken = () => {
  const [fcmToken, setFcmToken] = useState<any>(null);
  const [isFCMToken, setIsFCMToken] = useState<any>(null);
  const {data} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const getTokens = async () => {
    const fcmtoken = await getFCMToken();

    if (fcmtoken !== null) {
      setFcmToken(fcmtoken);
    }

    const isfcmToken = await isFCMTokenUpdate();
    if (isfcmToken !== null) {
      setIsFCMToken(isfcmToken);
    }
  };

  const updateFCMToken = useCallback(() => {
    dispatch(updateUserFCMToken({fcmToken, token: data?.token!}));
  }, [isFCMToken, fcmToken]);

  return {fcmToken, isFCMToken, updateFCMToken, getTokens};
};
