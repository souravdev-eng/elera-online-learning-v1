import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width} from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: width / 1.09,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: colors.light.white,
    elevation: 3,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'center',
  },

  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 18,
  },
  tagContainer: {
    backgroundColor: colors.light.blueLight,
    borderRadius: 6,
    paddingVertical: 6,
    width: 50,
    marginTop: 6,
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
    fontSize: fonts_Size.h4,
  },
  receiptButton: {
    width: 95,
    paddingVertical: 10,
    backgroundColor: colors.light.primary,
    borderRadius: 16,
    alignItems: 'center',
    position: 'absolute',
    right: 10,
  },
  receiptButtonText: {
    fontFamily: fonts_Family.UrbanistBold,
    color: colors.light.white,
    fontSize: fonts_Size.medium,
  },
});

export default styles;
