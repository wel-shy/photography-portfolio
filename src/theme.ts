import { DefaultTheme } from 'styled-components';

// eslint-disable-next-line no-shadow
export enum Themes {
  Light,
  Dark,
}

export const LightTheme: DefaultTheme = {
  backgroundColor: 'white',
  text: {
    color: '#020202',
  },
};

export const DarkTheme: DefaultTheme = {
  backgroundColor: 'black',
  text: {
    color: 'white',
  },
};
