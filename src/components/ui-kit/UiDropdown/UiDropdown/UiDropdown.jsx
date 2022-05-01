import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
// import {View} from 'react-native'
import {fonts} from '../../../../theme/Fonts';
import {height} from '../../../../utils/Responsive';

const UiDropdown = ({titleDropdown = 'Select'}) => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  return (
    <SelectDropdown
      data={countries}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
      buttonStyle={{
        width: '100%',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: height(8),
        backgroundColor: 'white',
        height: height(50),
      }}
      buttonTextStyle={{...fonts.PrimaryText}}
      defaultButtonText={titleDropdown}
    />
  );
};

export default UiDropdown;
