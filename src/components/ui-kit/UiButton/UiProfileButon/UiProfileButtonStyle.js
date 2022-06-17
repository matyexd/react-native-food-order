import {StyleSheet} from 'react-native';
import {height, sp, width} from '../../../../utils/Responsive';
import {fonts} from '../../../../theme/Fonts';

export const styles = StyleSheet.create({
  profileButton: {
    borderRadius: width(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#F5F5F5',
    borderWidth: width(1),
    backgroundColor: 'white',
    //justifyContent: 'center',
    paddingHorizontal: width(10),
    paddingVertical: height(12),
    flexDirection: 'row',
    boxSizing: 'border-box',
  },
  profileButtonText: {
    color: '#333333',
    ...fonts.SecondaryText,
  },
});
