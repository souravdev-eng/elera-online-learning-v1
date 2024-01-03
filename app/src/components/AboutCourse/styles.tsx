import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    backgroundColor: colors.light.white,
  },
  mentor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mentorHeading: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h4,
    color: colors.light.darkGrey,
    marginBottom: 14,
  },
  mentorImage: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    marginRight: 16,
  },
  mentorName: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h4,
    color: colors.light.primary,
    marginBottom: 4,
  },
  bio: {
    fontFamily: fonts_Family.UrbanistRegular,
    fontSize: fonts_Size.medium,
    color: colors.light.grey,
    letterSpacing: 0.5,
  },
  headingText: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h4,
    color: colors.light.black,
    marginTop: 14,
    marginBottom: 8,
  },
  text: {
    fontFamily: fonts_Family.UrbanistRegular,
    fontSize: fonts_Size.medium,
    letterSpacing: 0.5,
    lineHeight: 21,
    color: colors.light.darkGrey,
    // textAlign: 'center',
    width: '100%',
    overflow: 'hidden',
  },
});

export default styles;
