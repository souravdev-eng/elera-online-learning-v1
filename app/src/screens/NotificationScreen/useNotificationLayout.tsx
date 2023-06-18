import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../theme';
import styles from './styles';

type NotificationType = 'new-offer' | 'payment' | 'account';

export const useNotificationLayout = () => {
  const {light} = colors;

  const IconType = {
    GridIcon: (
      <View style={[styles.iconContainer, {backgroundColor: light.green}]}>
        <Ionicons name="md-grid" size={20} color={light.white} />
      </View>
    ),
    WalletIcon: (
      <View style={styles.iconContainer}>
        <Ionicons name="wallet" size={20} color={light.white} />
      </View>
    ),
    PersonIcon: (
      <View style={[styles.iconContainer, {backgroundColor: light.red}]}>
        <Ionicons name="person" size={20} color={light.white} />
      </View>
    ),
  };

  const renderIcon = (messageType: NotificationType) => {
    if (messageType === 'new-offer') {
      return IconType.GridIcon;
    } else if (messageType === 'account') {
      return IconType.PersonIcon;
    } else if (messageType === 'payment') {
      return IconType.WalletIcon;
    }
  };

  return {renderIcon};
};
