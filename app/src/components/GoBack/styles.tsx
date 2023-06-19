import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginVertical: 14,
    marginTop: 20,
  },
  wrapper: {flexDirection: 'row', alignItems: 'center'},
  heading: {
    fontSize: fonts_Size.h4,
    fontFamily: fonts_Family.UrbanistBold,
    color: colors.light.darkGrey,
    marginLeft: 14,
    width: '85%',
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: colors.light.darkGrey,
  },
});

export default styles;
