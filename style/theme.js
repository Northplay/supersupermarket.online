import { css } from 'styled-components';

export const colors = {
  white: '#fff',
  black: '#000',
  yellow: '#ffd52e',
  red: '#ff3a2e',
  green: '#52ef74',
  blue: '#3fa9ff',
  babyBlue: '#81c7ff',
  darkBlue: '#00336a',
};

export const viewportSizes = {
  desktop: 1200,
  tablet: 768,
  phone: 576,
};

const media = Object.keys(viewportSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${viewportSizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const theme = {
  colors,
  media,
  font: {
    family: {
      bread: 'Helvetica Neue, Helvetica, sans-serif',
      default: 'Cubano, sans-serif',
    },
    size: {
      large: '38pt',
      medium: '30pt',
      small: '28pt',
      tiny: '22pt',
    },
    weight:  {
      bold: '700',
      medium: '500',
      regular: '400',
    },
  },
  maxWidth: '1170px',
  minPadding: '10px',
};

export default theme;

