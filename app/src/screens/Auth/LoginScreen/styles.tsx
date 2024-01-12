import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: 220,
  },
  title: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h2 + 8,
    color: colors.light.black,
    marginVertical: 18,
  },
  icon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    borderColor: colors.light.grey,
    borderWidth: 0.5,
    height: 50,
    borderRadius: 14,
    justifyContent: 'center',
    marginBottom: 22,
  },
  buttonText: {
    fontFamily: fonts_Family.UrbanistMedium,
    fontSize: fonts_Size.body,
    color: colors.light.black,
  },
  signupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    backgroundColor: colors.light.primary,
    height: 54,
    borderRadius: 28,
    justifyContent: 'center',
    marginBottom: 18,
    // elevation: 8,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orText: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.medium,
    color: colors.light.grey,
    marginHorizontal: 12,
  },
  signupButtonText: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.medium,
    color: colors.light.white,
  },
  signupText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    fontSize: fonts_Size.medium,
    color: colors.light.primary,
  },
  text: {
    fontFamily: fonts_Family.UrbanistRegular,
    fontSize: fonts_Size.medium,
    color: colors.light.grey1,
    marginRight: 10,
    marginTop: 16,
  },
});

export default styles;
