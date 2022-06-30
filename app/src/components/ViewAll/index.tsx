import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {colors} from '../../theme';

interface Props {
  title: string;
  onPress?: () => void;
  style?: any;
  subtitle?: string;
}

const ViewAll: FC<Props> = ({title, onPress, style, subtitle}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textBold}>{title}</Text>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Text style={[styles.textBold, {color: colors.light.primary}]}>
          {subtitle ? subtitle : 'See All'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewAll;
