import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
// import {View} from 'react-native'
import {fonts} from '../../../../theme/Fonts';
import UiIcon from '../../UiIcon';
import {styles} from './UiDropdownStyle';

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
      buttonStyle={styles.buttonDropdownStyle}
      buttonTextStyle={styles.buttonDropdownTextStyle}
      defaultButtonText={titleDropdown}
      renderDropdownIcon={() => {
        return (
          <UiIcon iconName={'arrowDown'} iconColor={'black'} iconSize={7} />
        );
      }}
      rowStyle={styles.rowDropdownStyle}
      rowTextStyle={styles.rowDropdownTextStyle}
    />
  );
};

export default UiDropdown;
