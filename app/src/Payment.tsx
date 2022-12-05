import {useStripe} from '@stripe/stripe-react-native';
import React, {useEffect, useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native';

const Payment = () => {
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<Boolean>(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  useEffect(() => {
    fetchPaymentSheetParams();
  }, []);

  useEffect(() => {
    if (clientSecret) {
      initializePaymentSheet();
    }
  }, [clientSecret]);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch('http://192.168.0.104:4000/demo/demoPayment', {
      method: 'POST',
      body: JSON.stringify({name}),
      headers: {'Content-Type': 'application/json'},
    });
    const {clientSecret, ephemeralKey, customer} = await response.json();
    setClientSecret(clientSecret);
  };

  const initializePaymentSheet = async () => {
    try {
      if (!clientSecret) {
        return;
      }

      const {error} = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Elera',
      });

      if (!error) {
        setLoading(true);
      }
    } catch (err) {
      console.error(err);
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
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Name"
        style={{
          width: 300,
          fontSize: 20,
          padding: 10,
          borderWidth: 1,
        }}
      />
      <Button
        // @ts-ignore
        style={styles.button}
        disabled={!loading}
        title="Checkout"
        color="#841584"
        onPress={openPaymentSheet}
      />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15,
  },
});
