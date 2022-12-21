export interface IColors {
  text: string;
  appBackground: string;
  focus: string;
  primary: string;
  secondary: string;
  screenBackground: string;
}

const darkPalette: IColors = {
  text: '#ffffff',
  appBackground: '#333333',
  focus: 'gray',
  primary: '#ff6f00',
  secondary: '#a2d5c6',
  screenBackground: '#333333',
};

const lightPalette: IColors = {
  text: '#000000',
  appBackground: '#d1d1d1',
  focus: '#ffffff',
  primary: '#ff6f00',
  secondary: '#a2d5c6',
  screenBackground: '#ffffff',
};

export const getAppColors = (isDarkTheme: boolean): IColors => {
  return isDarkTheme ? darkPalette : lightPalette;
};
