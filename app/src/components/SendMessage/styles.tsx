import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.PrimaryLight,
    width: '65%',
    marginVertical: 10,
    alignSelf: 'flex-end',
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    borderTopRightRadius: 0,
    paddingRight: 14,
  },
  message: {
    fontFamily: fonts_Family.UrbanistMedium,
    color: colors.light.white,
    width: '88%',
    fontSize: fonts_Size.medium,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  timeContainer: {
    position: 'absolute',
    bottom: 5,
    right: 6,
    marginVertical: 4,
    marginLeft: 6,
  },
  time: {
    fontFamily: fonts_Family.UrbanistBold,
    color: colors.light.lightGrey2,
    fontSize: fonts_Size.small,
    // opacity: 0.8,
  },
});

export default styles;
