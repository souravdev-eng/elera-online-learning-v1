import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Icons} from '../../theme';
import styles from './styles';
import {useAppNavigation} from '../../hooks/useAppNavigation';

interface Props {
  title?: string;
  iconName?: any;
  showIcon?: boolean;
}

const GoBack: FC<Props> = ({title, iconName, showIcon = true}) => {
  const {handleGoBack} = useAppNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
          <Image source={Icons.ArrowBack} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.heading} numberOfLines={1}>
          {title}
        </Text>
      </View>
      {showIcon && (
        <TouchableOpacity>
          <Image
            source={iconName ? iconName : Icons.Search}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GoBack;
