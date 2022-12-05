import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';

import {usePaymentHook} from './hooks/usePaymentScreenHook';
import {GoBack, PaymentCard} from '../../components';
import {Icons} from '../../theme';
import styles from './styles';

const PaymentScreen = () => {
  const {
    gPay,
    applePay,
    cardPay,
    selectApplePay,
    selectCardPay,
    selectGPay,
    params,
  } = usePaymentHook();

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <GoBack title="Enroll Course" iconName={Icons.More} />
        <PaymentCard
          title="Google Pay"
          icon={Icons.Google}
          active={gPay}
          onPress={selectGPay}
        />
        <PaymentCard
          title="Apple Pay"
          icon={Icons.Apple}
          active={applePay}
          onPress={selectApplePay}
        />
        <PaymentCard
          title="Card"
          icon={Icons.MSCard}
          active={cardPay}
          onPress={selectCardPay}
        />
        {/* <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addNowText}>Add New Card</Text>
        </TouchableOpacity> */}
      </View>

      <TouchableOpacity style={styles.buyButton} activeOpacity={0.7}>
        <Text style={styles.buyNowText}>
          Enroll Course - ₹{params?.price || 350}{' '}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PaymentScreen;
