import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../../theme';
const {light} = colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.white,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h1,
    color: light.black,
    marginLeft: 6,
    marginBottom: 30,
  },
  signupButtonText: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.body,
    color: light.white,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.light.primary,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    marginTop: 30,
  },
  signinText: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.medium,
    color: light.primary,
  },
  textInput: {
    backgroundColor: light.lightGrey,
    borderColor: light.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 58,
    marginVertical: 12,
  },

  textInputActive: {
    backgroundColor: light.blueLight,
    borderWidth: 1,
    borderColor: light.primary,
  },

  input: {
    paddingLeft: 12,
    fontFamily: fonts_Family.UrbanistMedium,
    color: light.darkGrey,
    width: '100%',
    fontSize: fonts_Size.body,
  },
  text: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    fontSize: fonts_Size.medium,
    color: colors.light.grey1,
    marginRight: 10,
    marginTop: 16,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orText: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.medium,
    color: colors.light.grey1,
    marginHorizontal: 12,
  },
  icon: {
    width: 35,
    height: 35,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  socialButton: {
    borderWidth: 0.5,
    borderColor: '#ced4da',
    borderRadius: 16,
    width: 80,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
  },
  footerContainer: {
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default styles;
