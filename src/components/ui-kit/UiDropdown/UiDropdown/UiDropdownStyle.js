import {StyleSheet} from 'react-native';
import {fonts} from '../../../../theme/Fonts';
import {height, width} from '../../../../utils/Responsive';

export const styles = StyleSheet.create({
  buttonDropdownStyle: {
    backgroundColor: 'white',
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: height(8),
    height: height(50),
    alignSelf: 'flex-start',
  },
  buttonDropdownTextStyle: {
    ...fonts.SecondaryText,
    textAlign: 'left',
    color: '#333333',
  },
  rowDropdownStyle: {height: height(50), backgroundColor: 'white'},
  rowDropdownTextStyle: {...fonts.PrimaryText, textAlign: 'left'},
  dropdownStyle: {
    borderRadius: height(7),
  },
});
