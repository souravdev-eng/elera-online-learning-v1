import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width, height} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.white,
  },
  buyButton: {
    width: '94%',
    height: 58,
    backgroundColor: colors.light.primary,
    alignSelf: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
  },
  addButton: {
    width: '94%',
    height: 58,
    backgroundColor: colors.light.blueLight,
    alignSelf: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addNowText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    fontSize: fonts_Size.h4,
    color: colors.light.primary,
  },
  buyNowText: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h4,
    color: colors.light.white,
  },
});

export default styles;
