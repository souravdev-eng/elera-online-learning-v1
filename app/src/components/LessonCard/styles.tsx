import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width} from '../../theme';

const {light} = colors;

const styles = StyleSheet.create({
  lessonCard: {
    width: width / 1.05,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: light.white,
    borderRadius: 8,
  },
  lessonText: {
    fontSize: fonts_Size.medium,
    fontFamily: fonts_Family.UrbanistBold,
    color: light.black,
  },
  time: {
    fontSize: fonts_Size.small,
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: light.grey1,
    marginTop: 4,
    marginLeft: 10,
  },
});

export default styles;
