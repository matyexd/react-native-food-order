import {StyleSheet} from 'react-native';
import {height, width} from '../../../../utils/Responsive';
import {fonts} from '../../../../theme/Fonts';

export const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterValue: {
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: width(7),
    marginLeft: width(9),
    marginRight: width(5),
    borderRadius: height(5),
  },
  counterText: {
    color: 'black',
    ...fonts.PrimaryText,
  },
  minusTouchable: {
    paddingVertical: height(12),
  },
});
