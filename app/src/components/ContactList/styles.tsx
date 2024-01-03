import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width} from '../../theme';

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 6,
    padding: 10,
  },
  userName: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h4,
    color: colors.light.darkGrey,
  },
  userImage: {
    width: 55,
    height: 55,
    borderRadius: 60,
    resizeMode: 'contain',
  },
  message: {
    fontFamily: fonts_Family.UrbanistMedium,
    fontSize: fonts_Size.medium,
    color: colors.light.grey1,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.1,
  },
});

export default styles;
