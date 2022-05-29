import {StyleSheet} from 'react-native';
import {height} from '../../../utils/Responsive';
import {fonts} from '../../../theme/Fonts';

export const styles = StyleSheet.create({
  main: {
    margin: 0,
    justifyContent: 'flex-start',
  },
  modal: {
    paddingVertical: height(16),
    backgroundColor: '#4DBDC6',
    alignItems: 'center',
  },
  modalText: {
    ...fonts.PrimaryText,
  },
});
