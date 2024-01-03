import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.lightGrey2,
    width: '65%',
    marginVertical: 10,
    alignSelf: 'flex-start',
    borderRadius: 12,
    padding: 10,
    marginLeft: 10,
    borderTopLeftRadius: 0,
    paddingLeft: 14,
  },
  message: {
    fontFamily: fonts_Family.UrbanistMedium,
    color: colors.light.darkGrey,
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
    color: colors.light.grey1,
    fontSize: fonts_Size.small,
    // opacity: 0.8,
  },
});

export default styles;
