import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icons} from '../../theme';

const MessageCard = () => {
  return (
    <>
      <TouchableOpacity style={styles.messageContainer} activeOpacity={0.8}>
        <View style={styles.row}>
          <Image source={Icons.User1} style={styles.userImage} />
          <View style={{marginLeft: 10}}>
            <Text style={styles.userName}>Sourav Majumdar</Text>
            <Text style={styles.message} numberOfLines={1}>
              How are you
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.numberOfMessageContainer}>
            <Text style={styles.numberOfMessage}>2</Text>
          </View>
          <Text style={styles.time}>10:20 PM</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MessageCard;
