import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, width, sp} from '../../utils/Responsive';

export const styles = StyleSheet.create({
  modalLogout: {
    justifyContent: 'flex-end',
    marginBottom: height(10),
    marginHorizontal: width(10),
  },
  buttonCancel: {
    marginTop: height(10),
    backgroundColor: 'white',
  },

  buttonLogout: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: 'white',
  },

  logoutMessage: {
    alignItems: 'center',
    padding: width(20),
    backgroundColor: 'white',
    borderTopLeftRadius: width(8),
    borderTopRightRadius: width(8),
    borderBottomWidth: width(1),
    borderColor: '#c4c3c2',
  },

  logoutMessageText: {
    color: 'black',
    ...fonts.h4,
  },
});
