import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {colors} from '../../theme';

interface Props {
  title: string;
  onPress?: () => void;
  style?: any;
  subtitle?: string;
  star?: boolean;
}

const ViewAll: FC<Props> = ({title, onPress, style, subtitle, star}) => {
  return (
    <View style={[styles.container, style]}>
      {star ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome
            name="star-half-empty"
            size={18}
            style={{marginRight: 10}}
            color={colors.light.yellow}
          />
          <Text style={styles.textBold}>{title}</Text>
        </View>
      ) : (
        <Text style={styles.textBold}>{title}</Text>
      )}
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Text style={[styles.textBold, {color: colors.light.primary}]}>
          {subtitle ? subtitle : 'See All'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewAll;
