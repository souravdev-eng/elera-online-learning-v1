import {StyleSheet} from 'react-native';
import {fonts_Size, fonts_Family, colors} from '../../theme';

const styles = StyleSheet.create({
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
});

export default styles;
