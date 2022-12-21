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
  appBackground: '#e3e3e3',
  focus: '#ffffff',
  primary: '#ff6f00',
  secondary: '#a2d5c6',
  screenBackground: '#ededed',
};

export const getAppColors = (isDarkTheme: boolean): IColors => {
  return isDarkTheme ? darkPalette : lightPalette;
};
