import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light.white,
  },
  icon: {
    width: 60,
    height: 60,
  },
  message: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.medium,
    color: colors.light.black,
  },
});

export default styles;
