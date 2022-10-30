import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../theme';
import styles from './styles';

interface Props {
  active: boolean;
  title: string;
  icon: any;
}

const PaymentCard: FC<Props> = ({active, title, icon}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
        </View>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name={active ? 'circle-slice-8' : 'circle-outline'}
            size={26}
            color={colors.light.primary}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PaymentCard;
