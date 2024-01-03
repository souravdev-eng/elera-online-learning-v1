import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size} from '../../theme';

const styles = StyleSheet.create({
  backIcon: {
    width: 22,
    height: 22,
    tintColor: colors.light.darkGrey,
    marginLeft: 10,
    marginRight: 14,
  },
  title: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h2,
    color: colors.light.darkGrey,
    textTransform: 'capitalize',
  },
  headerWarper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    // backgroundColor: 'red',
  },
  userIcon: {
    width: '100%',
    height: '60%',
    tintColor: '#E9E9F0',
  },
  userContainer: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    marginBottom: 32,
    backgroundColor: '#F5F5F8',
    marginTop: 18,
  },
  edit: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    width: 20,
    height: 20,
    backgroundColor: colors.light.primary,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    width: 16,
    height: 16,
    tintColor: colors.light.white,
  },
  inputWarper: {
    width: '100%',
    // height: 58,
    // backgroundColor: '#f1f1f184',
    // borderRadius: 12,
    // marginBottom: 20,
    // justifyContent: 'center',
  },
  textInput: {
    paddingLeft: 12,
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.darkGrey,
    width: '80%',
  },

  icon: {
    width: 20,
    height: 20,
    tintColor: colors.light.grey1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    paddingLeft: 14,
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.grey1,
  },
  dropDownText: {
    fontFamily: fonts_Family.UrbanistMedium,
    color: colors.light.grey1,
    paddingLeft: 14,
    fontSize: 14,
  },
  submitButton: {
    width: '90%',
    height: 58,
    borderRadius: 28,
    backgroundColor: colors.light.PrimaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
  },
  submitButtonText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.white,
    fontSize: fonts_Size.body,
  },
});

export default styles;
