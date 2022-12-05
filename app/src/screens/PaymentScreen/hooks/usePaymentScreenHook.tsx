import React, {useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/types';

type PaymentScreenRouteProp = RouteProp<RootStackParamList, 'Payment'>;

export const usePaymentHook = () => {
  const {params} = useRoute<PaymentScreenRouteProp>();
  const [gPay, setGPay] = useState(false);
  const [applePay, setApplePay] = useState(false);
  const [cardPay, setCardPay] = useState(true);

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
  };
};
