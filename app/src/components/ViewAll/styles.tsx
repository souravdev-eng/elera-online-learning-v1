import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  textBold: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.body,
    color: colors.light.black,
  },
});
export default styles;
