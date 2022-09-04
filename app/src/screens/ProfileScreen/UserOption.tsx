import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface Props {
  icon: string;
  title: string;
  color?: string;
  onPress?: () => void;
}

const UserOption: FC<Props> = ({icon, title, color = '#000', onPress}) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <View style={styles.optionContent}>
        <Ionicons name={icon} size={22} color={color} />
        <Text style={styles.optionText}>{title}</Text>
      </View>
      <TouchableOpacity>
        <MaterialIcons name="keyboard-arrow-right" size={25} color={'#000'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default UserOption;
