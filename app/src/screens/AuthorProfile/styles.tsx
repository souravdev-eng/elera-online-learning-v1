import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  flex: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  userImage: {
    width: 110,
    height: 110,
    borderRadius: 90,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  title: {
    fontFamily: fonts_Family.UrbanistBold,
    color: colors.light.darkGrey,
    fontSize: fonts_Size.h4,
    marginVertical: 4,
  },
  subTitle: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.grey,
    fontSize: fonts_Size.medium,
    marginBottom: 6,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '76%',
    alignSelf: 'center',
    marginVertical: 16,
  },
  column: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    borderRightWidth: 1,
    height: 40,
    borderRightColor: colors.light.grey,
  },
  buttonsGroup: {
    alignSelf: 'center',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  buttonFill: {
    backgroundColor: colors.light.primary,
    width: width / 2.2,
    height: 44,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 24,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  buttonOutLine: {
    borderWidth: 1.5,
    borderColor: colors.light.primary,
    width: width / 2.2,
    height: 44,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 24,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  iconWhite: {
    width: 22,
    height: 22,
    tintColor: colors.light.white,
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: colors.light.primary,
  },
  buttonFillText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.white,
    fontSize: fonts_Size.h4,
    marginLeft: 10,
  },
  buttonOutLineText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.primary,
    fontSize: fonts_Size.h4,
    marginLeft: 10,
  },
});

export default styles;
