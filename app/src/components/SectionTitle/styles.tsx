import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width} from '../../theme';

const {light} = colors;

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: fonts_Size.body,
    fontFamily: fonts_Family.UrbanistBold,
    color: light.darkGrey,
    opacity: 0.7,
  },
  sectionTime: {
    fontSize: fonts_Size.body,
    fontFamily: fonts_Family.UrbanistBold,
    color: light.primary,
  },
});

export default styles;
