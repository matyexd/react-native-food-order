import {StyleSheet} from 'react-native';
import {height, sp, width} from '../../../../utils/Responsive';
import {fonts} from '../../../../theme/Fonts';

export const styles = StyleSheet.create({
  profileButton: {
    borderRadius: width(8),
    alignItems: 'center',
    //justifyContent: 'center',
    paddingHorizontal: width(20),
    paddingVertical: height(8),
    flexDirection: 'row',
    borderWidth: width(1),
    borderColor: '#999999',
    borderRadius: height(8),
    boxSizing: 'border-box',
  },
  profileButtonText: {
    color: '#333333',
    ...fonts.SecondaryText,
  },
});
