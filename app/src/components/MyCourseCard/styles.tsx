import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width} from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: width / 1.08,
    marginHorizontal: 10,
    marginVertical: 12,
    flexDirection: 'row',
    paddingHorizontal: 12,
    backgroundColor: colors.light.white,
    elevation: 3,
    paddingVertical: 18,
    borderRadius: 24,
  },

  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 18,
  },

  title: {
    fontFamily: fonts_Family.UrbanistBold,
    color: colors.light.darkGrey,
    fontSize: fonts_Size.body,
    marginBottom: 6,
    marginLeft: 10,
    paddingRight: 10,
  },

  timeText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.grey1,
    fontSize: fonts_Size.medium,
    marginLeft: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#EEEEEE',
    borderRadius: 6,
    width: width / 2,
    marginLeft: 10,
    marginVertical: 8,
  },
  progress: {
    height: 8,
    backgroundColor: colors.light.primary,
    borderRadius: 6,
  },
  lesson: {
    fontFamily: fonts_Family.UrbanistMedium,
    color: colors.light.grey1,
    fontSize: fonts_Size.medium,
    marginLeft: 6,
  },
});

export default styles;
