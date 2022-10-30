import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  container: {},
  viewAllContainer: {
    marginHorizontal: 18,
    width: '94%',
    alignSelf: 'center',
  },
  heading: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h4,
    color: colors.light.darkGrey,
    marginLeft: 10,
    marginTop: 8,
  },
});

export default styles;
