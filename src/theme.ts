import { DefaultTheme } from 'styled-components';

// eslint-disable-next-line no-shadow
export enum Themes {
  Light,
  Dark,
}

export const LightTheme: DefaultTheme = {
  backgroundColor: 'white',
};

export const DarkTheme: DefaultTheme = {
  backgroundColor: 'black',
};
