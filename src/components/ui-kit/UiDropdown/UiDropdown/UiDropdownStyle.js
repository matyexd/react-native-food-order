import {StyleSheet} from 'react-native';
import {fonts} from '../../../../theme/Fonts';
import {height} from '../../../../utils/Responsive';

export const styles = StyleSheet.create({
  buttonDropdownStyle: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: height(8),
    height: height(50),
    alignSelf: 'flex-start',
  },
  buttonDropdownTextStyle: {...fonts.SecondaryText, textAlign: 'left'},
  rowDropdownStyle: {height: height(50)},
  rowDropdownTextStyle: {...fonts.PrimaryText, textAlign: 'left'},
  dropdownStyle: {
    borderRadius: height(7),
  },
});
