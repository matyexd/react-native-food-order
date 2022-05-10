import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {View} from 'react-native';
import {fonts} from '../../../../theme/Fonts';
import UiIcon from '../../UiIcon';
import {styles} from './UiDropdownStyle';
import {Shadow} from 'react-native-shadow-2';

const UiDropdown = ({titleDropdown = 'Select', items, filter}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Shadow
      viewStyle={{alignSelf: 'stretch'}}
      offset={[0, 8]}
      startColor="#00000015">
      <View style={{borderRadius: 8}}>
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
      </View>
    </Shadow>
  );
};

export default UiDropdown;
