import { DefaultTheme } from 'styled-components';

enum Colors {
  'BRAND-RED' = '#ED707C',
  'BRAND-YELLOW' = '#FFEB3B',
  'BRAND100' = '#673AB7',
  'BRAND50' = '#8B71FF',
  'BRAND0' = '#ABA4E9',
  'BLACK100' = '#212529',
  'MONO100B' = '#212529',
  'WHITE100' = '#F8F9FA',
  'MONO100W' = '#F8F9FA',
  'MONO60B' = '#343A40',
  'MONO60W' = '#E9ECEF',
  'MONO30B' = '#495057',
  'MONO30W' = '#DEE2E6',
  'MONO0B' = '#6C757D',
  'MONO0W' = '#CED4DA',
}

const theme: DefaultTheme = {
  colors: {
    brandRed: Colors['BRAND-RED'],
    brandYellow: Colors['BRAND-YELLOW'],
    brand100: Colors.BRAND100,
    brand50: Colors.BRAND50,
    brand0: Colors.BRAND0,
    black100: Colors.BLACK100,
    mono100: Colors.MONO100B,
    mono60: Colors.MONO60B,
    mono30: Colors.MONO30B,
    mono0: Colors.MONO0B,
    white100: Colors.WHITE100,
  },
  fontSize: {
    title: '64px',
    h1: '48px',
    h2: '40px',
    h3: '36px',
    h4: '32px',
    h5: '24px',
    h6: '20px',
    content: '16px',
  },
  lineHeight: {
    title: '76px',
    h1: '57px',
    h2: '48px',
    h3: '43px',
    h4: '38px',
    h5: '29px',
    h6: '24px',
    content: '19px',
  },
};

export { theme };