import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    justifyContent: 'space-between',
    marginRight: 4,
  },
  userImage: {
    height: 35,
    width: 35,
    borderRadius: 25,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    width: '70%',
  },
  userName: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.darkGrey,
    fontSize: fonts_Size.h4 - 2,
    marginLeft: 12,
    width: '100%',
  },
  userRating: {
    paddingHorizontal: 10,
    paddingTop: 6,
  },
  userRatingText: {
    fontFamily: fonts_Family.UrbanistMedium,
    color: colors.light.darkGrey,
    fontSize: fonts_Size.medium,
    letterSpacing: 0.7,
  },
});

export default styles;
