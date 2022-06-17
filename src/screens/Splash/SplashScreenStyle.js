import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, width} from '../../utils/Responsive';

export const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', backgroundColor: 'white'},
  logo: {flex: 1, marginTop: height(70)},
  helloTitle: {flex: 1, marginTop: height(20)},
  helloTitleText: {...fonts.h2, color: 'black'},
  loading: {flex: 1},
});
