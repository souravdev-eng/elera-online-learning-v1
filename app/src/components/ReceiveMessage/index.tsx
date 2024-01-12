import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ReceiveMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Receive Message Receive Message Receive Message Receive Message kf
      </Text>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>10:20</Text>
      </View>
    </View>
  );
};

export default ReceiveMessage;
