import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Icons} from '../../theme';
import styles from './styles';
import {useAppNavigation} from '../../hooks/useAppNavigation';

interface Props {
  title?: string;
  iconName?: any;
}

const GoBack: FC<Props> = ({title, iconName}) => {
  const {handelGoBack} = useAppNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity activeOpacity={0.7} onPress={handelGoBack}>
          <Image source={Icons.ArrowBack} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <TouchableOpacity>
        <Image
          source={iconName ? iconName : Icons.Search}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GoBack;
