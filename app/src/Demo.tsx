import {StripeProvider} from '@stripe/stripe-react-native';
import {StyleSheet, Text, View} from 'react-native';
import Payment from './Payment';
import React from 'react';

export default function Demo() {
  return (
    <View style={styles.container}>
      <StripeProvider publishableKey="pk_test_51JOBJnSA4EPPqs66VxVusJrEerUnYWuDGHkzasE78kNncq9UgLx4PwQdU8XPpn41qwz1vhNsxcY14rSQ7fC0c0gt00lNQYG9wa">
        <Payment />
      </StripeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
