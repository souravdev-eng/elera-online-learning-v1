import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.white,
    alignItems: 'center',
  },
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
    fontSize: fonts_Size.h4,
    fontFamily: fonts_Family.UrbanistBold,
    color: colors.light.darkGrey,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
