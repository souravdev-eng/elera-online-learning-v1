import {StyleSheet} from 'react-native';
import {colors, width} from '../../theme';

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.light.grey,
  },
  sectionTimeText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.light.primary,
  },
  listCardContainer: {
    elevation: 3,
    width: width / 1.05,
    marginVertical: 12,
    backgroundColor: colors.light.white,
    alignSelf: 'center',
    borderRadius: 8,
    paddingVertical: 16,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numberContainer: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: colors.light.blueLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  numberText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.light.primary,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.light.black,
    marginVertical: 4,
  },
  videoTimeText: {
    fontSize: 14,
    color: colors.light.grey,
  },
  playImage: {
    tintColor: colors.light.PrimaryLight,
    height: 30,
    width: 30,
  },
});

export default styles;
