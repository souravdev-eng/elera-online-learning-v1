import React from 'react';
import {CardField, StripeProvider} from '@stripe/stripe-react-native';
import {View} from 'react-native';

function Demo() {
  return (
    <View style={{height: 200, width: '100%'}}>
      <CardField
        postalCodeEnabled={false}
        placeholders={{number: '4242 4242 4242 4242'}}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
      />
    </View>
  );
}

export default Demo;
