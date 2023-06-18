import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width} from '../../theme';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.light.lightGrey,
  },
  iconContainer: {
    height: 45,
    width: 45,
    backgroundColor: colors.light.primary,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    height: 94,
    width: width / 1.1,
    backgroundColor: colors.light.white,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  heading: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h4,
    color: colors.light.black,
    lineHeight: 20,
    paddingBottom: 6,
  },
  subHeading: {
    fontFamily: fonts_Family.UrbanistMedium,
    fontSize: fonts_Size.medium,
    color: colors.light.grey,
  },
  timeContainer: {
    position: 'absolute',
    top: 2,
    left: 10,
  },
  time: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.small,
  },
  container: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default styles;
