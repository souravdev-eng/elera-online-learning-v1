import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const SendMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Send Message Send Message Send Message Send Message kf
      </Text>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>10:20</Text>
      </View>
    </View>
  );
};

export default SendMessage;
