export const FontSize = {
  regular: '1.6rem',
};

export const lineHeightDefault = '2.7rem';

export const Colors = {
  white: '#ffffff',
  black: '#000000',
  primary: '#23614e',
  red: '#d00000',
  lightGrey: '#f2f2f2',
  grey: '#696969',
};

export const size = {
  small: 320,
  medium: 600,
  large: 1026,
  xl: 1280,
  xxl: 1440,
};

export const device = {
  small: `(min-width: ${size.small}px) and (max-width: ${size.medium - 1}px)`,
  medium: `(min-width: ${size.medium}px) and (max-width: ${size.large - 1}px)`,
  large: `(min-width: ${size.large}px) and (max-width: ${size.xl - 1}px)`,
  xl: `(min-width: ${size.xl}px) and (max-width: ${size.xxl - 1}px)`,
  xxl: `(min-width: ${size.xxl}px)`,
};
