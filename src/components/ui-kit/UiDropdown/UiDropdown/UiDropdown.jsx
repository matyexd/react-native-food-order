import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
// import {View} from 'react-native'
import {fonts} from '../../../../theme/Fonts';
import UiIcon from '../../UiIcon';
import {styles} from './UiDropdownStyle';

const UiDropdown = ({titleDropdown = 'Select', items, filter}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectDropdown
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      data={items}
      onSelect={(selectedItem, index) => {
        filter(selectedItem);
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
        return isOpen ? (
          <UiIcon
            iconName={'arrowDown'}
            iconColor={'black'}
            iconSize={7}
            style={{
              transform: [{rotate: '180deg'}],
            }}
          />
        ) : (
          <UiIcon iconName={'arrowDown'} iconColor={'black'} iconSize={7} />
        );
      }}
      rowStyle={styles.rowDropdownStyle}
      rowTextStyle={styles.rowDropdownTextStyle}
      dropdownStyle={styles.dropdownStyle}
      dropdownOverlayColor="#ffffff00" //Убирает затемнение при открытии
    />
  );
};

export default UiDropdown;
