import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width} from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: width / 1.05,
    marginHorizontal: 10,
    marginVertical: 12,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: colors.light.white,
    elevation: 3,
    paddingVertical: 18,
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  ratingIcon: {
    width: 14,
    height: 14,
    tintColor: colors.light.orange,
    marginRight: 6,
  },
  bookMark: {
    width: 25,
    height: 25,
    tintColor: colors.light.PrimaryLight,
  },
  courseImage: {
    width: 120,
    height: 120,
    borderRadius: 18,
  },
  tagContainer: {
    backgroundColor: colors.light.blueLight,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 8,
    position: 'absolute',
    top: -6,
    left: -5,
  },
  tagText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.PrimaryLight,
    textAlign: 'center',
    fontSize: fonts_Size.medium - 2,
  },
  title: {
    fontFamily: fonts_Family.UrbanistBold,
    color: colors.light.darkGrey,
    fontSize: fonts_Size.medium,
    marginBottom: 6,
    marginTop: 28,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  offerPrice: {
    fontFamily: fonts_Family.UrbanistBold,
    color: colors.light.primary,
    fontSize: fonts_Size.h3,
    marginRight: 8,
  },
  originalPrice: {
    fontFamily: fonts_Family.UrbanistRegular,
    color: colors.light.grey,
    fontSize: fonts_Size.body,
    textDecorationLine: 'line-through',
  },
  ratingText: {
    fontFamily: fonts_Family.UrbanistMedium,
    color: colors.light.grey1,
    fontSize: fonts_Size.medium,
    letterSpacing: 0.5,
  },
});

export default styles;
