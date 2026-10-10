import { DefaultTheme } from 'styled-components';

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
