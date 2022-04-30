import {StyleSheet} from 'react-native';
import {height, sp, width} from '../../../../utils/Responsive';
import {fonts} from '../../../../theme/Fonts';
export const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: 'black',
    alignItems: 'center',
    paddingHorizontal: width(20),
    paddingVertical: height(8),
  },
  mainButtonText: {
    color: 'white',
    ...fonts.SecondaryText,
  },
});
