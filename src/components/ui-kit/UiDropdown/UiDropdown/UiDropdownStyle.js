import {StyleSheet} from 'react-native';
import {fonts} from '../../../../theme/Fonts';
import {height} from '../../../../utils/Responsive';

export const styles = StyleSheet.create({
  buttonDropdownStyle: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: height(8),
    backgroundColor: 'white',
    height: height(50),
    alignSelf: 'flex-start',
  },
  buttonDropdownTextStyle: {...fonts.PrimaryText, textAlign: 'left'},
  rowDropdownStyle: {height: height(50)},
  rowDropdownTextStyle: {...fonts.PrimaryText, textAlign: 'left'},
});
