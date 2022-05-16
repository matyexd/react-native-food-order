import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {View} from 'react-native';
import UiIcon from '../../UiIcon';
import {styles} from './UiDropdownStyle';
import {Shadow} from 'react-native-shadow-2';
import {width} from '../../../../utils/Responsive';

const UiDropdown = ({titleDropdown = 'Select', items, filter}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Shadow
      viewStyle={{alignSelf: 'stretch'}}
      offset={[0, 8]}
      startColor={'rgba(51, 51, 51, 0.06)'}>
      <View style={{borderRadius: 8}}>
        <SelectDropdown
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          data={items}
          onSelect={selectedItem => {
            filter(selectedItem.id);
          }}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem.categoryName;
          }}
          rowTextForSelection={item => {
            return item.categoryName;
          }}
          buttonStyle={styles.buttonDropdownStyle}
          buttonTextStyle={styles.buttonDropdownTextStyle}
          defaultButtonText={titleDropdown}
          renderDropdownIcon={() => {
            return isOpen ? (
              <UiIcon
                iconName={'arrowDown'}
                iconColor={'black'}
                iconSize={8}
                style={{
                  transform: [{rotate: '180deg'}],
                  marginRight: width(5),
                }}
              />
            ) : (
              <UiIcon
                iconName={'arrowDown'}
                iconColor={'black'}
                iconSize={8}
                style={{
                  marginRight: width(5),
                }}
              />
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
