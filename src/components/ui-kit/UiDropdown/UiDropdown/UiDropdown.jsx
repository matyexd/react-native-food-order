import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
// import {View} from 'react-native'
import {fonts} from '../../../../theme/Fonts';
import {height} from '../../../../utils/Responsive';
import UiIcon from '../../UiIcon';

const UiDropdown = ({titleDropdown = 'Select', categories}) => {
  return (
    <SelectDropdown
      data={categories}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem);
      }}
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
        alignSelf: 'flex-start',
      }}
      buttonTextStyle={{...fonts.PrimaryText, textAlign: 'left'}}
      defaultButtonText={titleDropdown}
      renderDropdownIcon={() => {
        return (
          <UiIcon iconName={'arrowDown'} iconColor={'black'} iconSize={7} />
        );
      }}
      rowStyle={{height: height(50)}}
      rowTextStyle={{...fonts.PrimaryText, textAlign: 'left'}}
    />
  );
};

export default UiDropdown;
