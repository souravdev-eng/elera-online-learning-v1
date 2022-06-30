import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width} from '../../theme';

const {light} = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.white,
  },
  lessonCard: {
    width: width / 1.05,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: light.white,
    elevation: 3,
    borderRadius: 8,
  },
  lessonText: {
    fontSize: fonts_Size.h4,
    fontFamily: fonts_Family.UrbanistBold,
    color: light.black,
  },
  time: {
    fontSize: fonts_Size.medium,
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: light.grey1,
    marginTop: 4,
  },
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
    // marginTop: 4,
  },
});

export default styles;
