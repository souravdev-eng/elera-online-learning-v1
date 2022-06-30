import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 12,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  icon: {
    width: 26,
    height: 26,
    tintColor: colors.light.primary,
  },
  title: {
    fontSize: fonts_Size.body,
    fontFamily: fonts_Family.UrbanistBold,
    color: colors.light.darkGrey,
    marginLeft: 14,
    textTransform: 'capitalize',
  },
  subTitle: {
    fontSize: fonts_Size.medium,
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.grey,
    marginLeft: 14,
    letterSpacing: 0.5,
  },
});

export default styles;
