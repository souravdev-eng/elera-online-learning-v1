import {StyleSheet} from 'react-native';
import {colors, fonts_Family, fonts_Size, width} from '../../theme';
const {light} = colors;

const styles = StyleSheet.create({
  container: {
    backgroundColor: light.white,
    flex: 1,
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: width / 1.1,
    height: '25%',
    borderBottomWidth: 0.5,
    borderBottomColor: light.grey1,
    marginTop: 14,
  },
  userImage: {
    height: 110,
    width: 110,
    borderRadius: 110,
    overflow: 'hidden',
  },
  userName: {
    fontSize: fonts_Size.h3,
    fontFamily: fonts_Family.UrbanistBold,
    color: light.darkGrey,
    marginTop: 6,
    marginBottom: 2,
  },
  userEmail: {
    fontSize: fonts_Size.medium,
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: light.darkGrey,
    marginBottom: 2,
    paddingBottom: 22,
  },
  userOptionContainer: {
    marginTop: 14,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 12,
    alignItems: 'center',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: fonts_Size.medium + 2,
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: light.darkGrey,
    marginLeft: 14,
  },
});

export default styles;
