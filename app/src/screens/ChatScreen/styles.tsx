import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    paddingBottom: 8,
    borderBottomColor: colors.light.lightGrey2,
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 6,
  },
  userName: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h4,
    color: colors.light.darkGrey,
    // marginBottom: 12,
  },
  online: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    fontSize: fonts_Size.small,
    color: colors.light.primary,
    letterSpacing: 0.5,
  },
  icon: {
    width: 28,
    height: 28,
    // marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageDate: {
    alignSelf: 'center',
    padding: 8,
    backgroundColor: colors.light.lightGrey2,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginVertical: 6,
  },
  messageDateText: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.small,
    color: colors.light.grey,
  },
  textInputContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    // backgroundColor: colors.light.white,
    // opacity: 0.8,
  },
  textInput: {
    width: '78%',
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    backgroundColor: colors.light.lightGrey2,
    // backgroundColor: '#FAFAFA',
    borderRadius: 10,
    paddingHorizontal: 14,
  },
  input: {
    fontFamily: fonts_Family.UrbanistRegular,
    color: colors.light.darkGrey,
    width: '80%',
  },
  voiceContainer: {
    backgroundColor: colors.light.primary,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },
});

export default styles;
