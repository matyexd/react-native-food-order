import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/Responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width(20),
  },
  mainList: {
    flex: 1,
  },
  card: {
    flex: 1,
    marginBottom: height(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
