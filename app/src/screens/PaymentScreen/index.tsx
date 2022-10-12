import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {GoBack, PaymentCard} from '../../components';
import {Icons} from '../../theme';
import styles from './styles';

const PaymentScreen = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <GoBack title="Enroll Course" iconName={Icons.More} />
        <PaymentCard title="Google Pay" icon={Icons.Google} active={true} />
        <PaymentCard title="Apple Pay" icon={Icons.Apple} active={false} />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addNowText}>Add New Card</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyNowText}>Enroll Course - $39</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PaymentScreen;
