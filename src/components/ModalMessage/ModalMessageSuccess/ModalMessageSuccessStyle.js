import {StyleSheet} from 'react-native';
import {height} from '../../../utils/Responsive';
import {fonts} from '../../../theme/Fonts';

export const styles = StyleSheet.create({
  main: {
    margin: 0,
    justifyContent: 'flex-start',
  },
  modal: {
    flex: 1,
    paddingVertical: height(16),
    backgroundColor: '#4DBDC6',
    alignItems: 'center',
    opacity: 0.7,
  },
  back: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  modalText: {
    ...fonts.PrimaryText,
    color: '#000000',
  },
});
