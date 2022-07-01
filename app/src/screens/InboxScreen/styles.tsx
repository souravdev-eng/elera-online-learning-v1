import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.white,
    flex: 1,
  },
  add: {
    backgroundColor: colors.light.primary,
    width: 60,
    height: 60,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 12,
    bottom: 20,
  },
});

export default styles;
