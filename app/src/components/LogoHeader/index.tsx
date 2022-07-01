import {View, Text, Image, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {colors, fonts_Family, fonts_Size, Icons} from '../../theme';

interface Props {
  style?: any;
  title: string;
}

const LogoHeader: FC<Props> = ({style, title}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 12,
          backgroundColor: '#fff',
        },
        style,
      ]}>
      <View style={styles.row}>
        <Image source={Icons.logoWhite} style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.row}>
        <Image source={Icons.Search} style={styles.icon} />
        <Image source={Icons.More} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fonts_Size.h4,
    fontFamily: fonts_Family.UrbanistSemiBold,
    paddingBottom: 6,
  },
  logo: {
    width: 45,
    height: 45,
    tintColor: colors.light.primary,
    marginLeft: 8,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  title: {
    fontSize: fonts_Size.h3,
    fontFamily: fonts_Family.UrbanistBold,
    color: colors.light.darkGrey,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default LogoHeader;
