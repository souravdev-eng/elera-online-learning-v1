import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  searchContainer: {
    width: '90%',
    backgroundColor: colors.light.blueLight,
    height: 58,
    alignSelf: 'center',
    borderRadius: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.2,
    borderColor: colors.light.PrimaryLight,
    marginVertical: 20,
  },
  searchBar: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    fontSize: fonts_Size.body,
    paddingLeft: 12,
    width: '84%',
    color: colors.light.grey,
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: colors.light.grey1,
  },

  filterIcon: {
    width: 22,
    height: 22,
    tintColor: colors.light.primary,
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.light.grey1,
    marginBottom: 26,
  },
  reaccentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  reaccentText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    fontSize: fonts_Size.body,
    color: colors.light.grey,
  },
  closeIcon: {
    width: 28,
    height: 28,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: colors.light.grey1,
  },
});

export default styles;
