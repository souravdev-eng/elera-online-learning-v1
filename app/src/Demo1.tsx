import React from 'react';
import {
  CardField,
  StripeProvider,
  useStripe,
} from '@stripe/stripe-react-native';
import {View, Button, Alert} from 'react-native';

function Demo() {
  const stripe = useStripe();

  const handlePay = async () => {
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: 'jbhvdjbvhdjb',
    });
    // if (initSheet.error) return Alert.alert(initSheet.error.message);
    // const presentSheet = await stripe.presentPaymentSheet({clientSecret});
  };

  return (
    <View style={{height: 200, width: '100%'}}>
      <Button title="Use My Card" onPress={handlePay} />
      {/* <CardField
        postalCodeEnabled={false}
        placeholders={{number: '4242 4242 4242 4242'}}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        cardStyle={{
          backgroundColor: '#be7171',
          textColor: '#f0f0f0',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
      /> */}
    </View>
  );
}

export default Demo;
