import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from './UiProfileButtonStyle';
import {UiIcon} from '../../index';
import {Shadow} from 'react-native-shadow-2';
import {sp} from '../../../../utils/Responsive';

const UiProfileButton = ({text, onPress, iconName}) => {
  return (
    <View>
      <Shadow
        viewStyle={{alignSelf: 'stretch'}}
        offset={[0, 8]}
        startColor={'rgba(51, 51, 51, 0.06)'}>
        <TouchableOpacity style={styles.profileButton} onPress={onPress}>
          <Text style={styles.profileButtonText}>{text}</Text>
          <UiIcon iconName={iconName} iconColor={'black'} iconSize={sp(20)} />
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

export default UiProfileButton;
