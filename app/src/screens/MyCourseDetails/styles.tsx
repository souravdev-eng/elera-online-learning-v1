import {StyleSheet} from 'react-native';
import {width} from '../../theme';

const styles = StyleSheet.create({
  scrollWrapper: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: '20%',
  },
  container: {
    width: width,
    aspectRatio: 16 / 9,
    alignSelf: 'center',
  },
});

export default styles;
