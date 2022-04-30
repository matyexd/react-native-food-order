import {Dimensions, PixelRatio} from 'react-native';

/**
 * Получаем размер видимого экрана
 */
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

/**
 * Размеры взяты из дизайна для сплеш-экрана(предполагается, что это и есть экран, для которого делался дизайн)
 */
const referenceHeight = 812;
const referenceWidth = 375;

/**
 *
 * @param  value  Int-овое входное значения px
 * @returns {number} Преобразованное значение в зависимости от размера экрана
 */
export const height = (value = 0) => {
  const validValue = Math.abs(
    value > referenceHeight ? referenceHeight : value,
  );
  return PixelRatio.roundToNearestPixel(
    (validValue / referenceHeight) * screenHeight,
  );
};
/**
 *
 * @param value Int-овое входное значения px
 * @returns {number} Преобразованное значение в зависимости от размера экрана
 */
export const width = (value = 0) => {
  const validValue = Math.abs(value > referenceWidth ? referenceWidth : value);
  return PixelRatio.roundToNearestPixel(
    (validValue / referenceWidth) * screenWidth,
  );
};
/**
 *
 * @param value Int-овое входное значения px
 * @returns {number} Преобразованное значение в зависимости от размера экрана
 */
export const sp = (value = 0) => {
  const validValue = Math.abs(
    value > referenceHeight ? referenceHeight : value,
  );
  return PixelRatio.roundToNearestPixel(
    (validValue / referenceHeight) * screenHeight,
  );
};
