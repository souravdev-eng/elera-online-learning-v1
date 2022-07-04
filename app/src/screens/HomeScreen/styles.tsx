import {StyleSheet, Dimensions} from 'react-native';
import {fonts_Size, fonts_Family, colors} from '../../theme';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.white,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.light.grey1,
  },
  filterIcon: {
    width: 22,
    height: 22,
    tintColor: colors.light.primary,
  },
  userHeaderWrapper: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconWrapper: {
    flexDirection: 'row',
    width: '18%',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 12,
  },
  gridText: {
    fontSize: fonts_Size.h4,
    fontFamily: fonts_Family.UrbanistRegular,
    color: colors.light.grey,
    marginBottom: 4,
  },
  userName: {
    fontSize: fonts_Size.h3,
    fontFamily: fonts_Family.UrbanistBold,
    color: colors.light.black,
  },

  searchContainer: {
    width: '90%',
    backgroundColor: colors.light.lightGrey,
    height: 58,
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    fontSize: fonts_Size.medium,
    paddingLeft: 12,
    width: '84%',
    color: colors.light.grey,
  },
  bannerContainer: {
    width: width / 1.09,
    height: height / 4.4,
    backgroundColor: colors.light.PrimaryLight,
    borderRadius: 16,
    marginHorizontal: 2,
    alignSelf: 'center',
    marginTop: 22,
    marginBottom: 12,
    overflow: 'hidden',
  },
  textBold: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.medium,
    color: colors.light.black,
  },
  userCard: {
    width: 80,
    alignItems: 'center',
    paddingHorizontal: 6,
    height: 80,
  },
  userNameCardImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  userNameCardText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.darkGrey,
    fontSize: fonts_Size.medium,
    width: '100%',
    textAlign: 'center',
    marginTop: 2,
  },
  viewAllContainer: {
    marginHorizontal: 18,
    width: '90%',
    alignSelf: 'center',
  },
  tag: {
    borderWidth: 1.2,
    marginHorizontal: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    minWidth: 55,
    borderColor: colors.light.PrimaryLight,
    justifyContent: 'center',
  },
  tagText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.PrimaryLight,
    fontSize: fonts_Size.medium,
    // textAlign: 'center',
  },
});

export default styles;
