import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/Fonts';
import {height, width} from '../../utils/Responsive';

export const styles = StyleSheet.create({
  image: {
    margin: 0,
    width: width(375),
    height: height(200),
    borderTopLeftRadius: height(15),
    borderTopRightRadius: height(15),
  },
  infoModal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modal: {
    borderTopLeftRadius: height(15),
    borderTopRightRadius: height(15),
    backgroundColor: 'white',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: height(5),
    paddingRight: width(5),
  },
  about: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginBottom: height(8),
  },
  header: {
    ...fonts.SecondaryText,
    color: '#333333',
  },
  container: {
    paddingHorizontal: width(20),
    paddingVertical: height(8),
  },
  gramm: {
    ...fonts.h3,
    color: '#333333',
  },
  iconFavorite: {
    justifyContent: 'center',
  },
  description: {
    ...fonts.PrimaryText,
    color: '#333333',
    marginTop: height(8),
    marginBottom: height(10),
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: height(8),
  },
  count: {
    ...fonts.h2,
    color: '#333333',
  },
  iconPrice: {
    alignSelf: 'center',
  },
  footer: {
    marginTop: height(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counter: {
    flexGrow: 1,
  },
  button: {
    flexGrow: 3,
  },
});
