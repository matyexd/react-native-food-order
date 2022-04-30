import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import selection from './selection.json';

const Icon = createIconSetFromIcoMoon(selection);

<<<<<<< HEAD
const SIcon = ({iconName, iconColor, iconSize = 20, style}) => {
=======
const SIcon = ({iconName, iconColor, iconSize = 20}) => {
  console.log(iconName, iconColor, iconSize);
>>>>>>> feature/DishCard
  return <Icon name={iconName} color={iconColor} size={iconSize} />;
};

export default SIcon;
