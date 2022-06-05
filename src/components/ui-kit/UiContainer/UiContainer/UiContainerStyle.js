import {StyleSheet} from 'react-native';
import {height, width} from '../../../../utils/Responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width(20),
    paddingTop: height(12),
    paddingBottom: height(12),
    backgroundColor: 'white',
  },
  containerIOS: {
    flex: 1,
    paddingHorizontal: width(20),
    paddingTop: height(40),
    paddingBottom: height(12),
    backgroundColor: 'white',
  }
});
