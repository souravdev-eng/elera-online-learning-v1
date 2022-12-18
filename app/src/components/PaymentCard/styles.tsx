import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width, height} from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: 66,
    backgroundColor: colors.light.white,
    width: width / 1.09,
    alignSelf: 'center',
    marginVertical: 14,
    borderRadius: 8,
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fonts_Size.h4,
    fontFamily: fonts_Family.UrbanistBold,
    color: colors.light.black,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
