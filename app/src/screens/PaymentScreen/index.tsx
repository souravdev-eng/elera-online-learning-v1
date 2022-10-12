import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';

const PaymentScreen = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Text>PaymentScreen</Text>
      </View>
    </ScrollView>
  );
};

export default PaymentScreen;
