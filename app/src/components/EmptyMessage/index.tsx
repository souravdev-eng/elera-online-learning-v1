import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icons} from '../../theme';

const EmptyMessage = ({message}: {message: string}) => {
  return (
    <View style={styles.container}>
      <Image source={Icons.Empty} style={styles.icon} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default EmptyMessage;
