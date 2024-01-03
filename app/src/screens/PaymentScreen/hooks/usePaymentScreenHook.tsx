import React, {useEffect, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/types';
import {useStripe} from '@stripe/stripe-react-native';
import {Alert} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../hooks/useRedux';
import {
  paymentComplete,
  paymentSheetParams,
} from '../../../store/actions/payment.actions';
import {useAppNavigation} from '../../../hooks/useAppNavigation';

type PaymentScreenRouteProp = RouteProp<RootStackParamList, 'Payment'>;

export const usePaymentHook = () => {
  const {params} = useRoute<PaymentScreenRouteProp>();
  const {navigation} = useAppNavigation();
  const [gPay, setGPay] = useState(false);
  const [applePay, setApplePay] = useState(false);
  const [cardPay, setCardPay] = useState(true);
  const [loader, setLoader] = useState(false);

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.user);
  const {payment, order} = useAppSelector(state => state.order);
  const token = data?.token!;

  useEffect(() => {
    if (token && order?.id) {
      fetchPaymentSheetParams();
    }
  }, [order?.id, token]);

  useEffect(() => {
    if (clientSecret) {
      initializePaymentSheet();
    }
  }, [clientSecret]);

  const fetchPaymentSheetParams = async () => {
    dispatch(paymentSheetParams({token, orderId: order?.id})).then(res => {
      setClientSecret(payment?.clientSecret);
    });
  };

  const initializePaymentSheet = async () => {
    try {
      if (!clientSecret) {
        return;
      }

      await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Elera',
      });
    } catch (err) {
      Alert.alert('Something went wrong, try again later!');
    }
  };

  const openPaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }

    const {error} = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
      navigation.goBack();
    } else {
      if (data && order) {
        dispatch(paymentComplete({token: data.token, orderId: order?.id})).then(
          () => {
            setLoader(true);
            navigation.push('Main');
            setLoader(false);
          },
        );
      }
    }
  };

  const selectGPay = () => {
    setGPay(true);
    setCardPay(false);
    setApplePay(false);
  };
  const selectApplePay = () => {
    setApplePay(true);
    setGPay(false);
    setCardPay(false);
  };
  const selectCardPay = () => {
    setCardPay(true);
    setGPay(false);
    setApplePay(false);
  };

  return {
    gPay,
    applePay,
    cardPay,
    selectApplePay,
    selectCardPay,
    selectGPay,
    params,
    openPaymentSheet,
    loader,
  };
};
