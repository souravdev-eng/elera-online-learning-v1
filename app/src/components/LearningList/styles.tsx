import {StyleSheet} from 'react-native';
import {fonts_Family, fonts_Size, colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    marginLeft: 10,
  },
  pointText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    fontSize: fonts_Size.medium + 2,
    color: colors.light.darkGrey,
    width: '90%',
  },
});

export default styles;
