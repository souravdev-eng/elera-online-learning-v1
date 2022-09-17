import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {colors} from '../../theme';

interface Props {
  isActive: boolean;
  onPress: () => void;
  title: string;
}

const SectionTitle: FC<Props> = ({isActive, onPress, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <AntDesign
          name={isActive ? 'minus' : 'plus'}
          size={25}
          color={colors.light.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SectionTitle;
