export interface IColors {
  text: string;
  appBackground: string;
}

const darkPalette: IColors = {
  text: '#ffffff',
  appBackground: '#434546',
};

const lightPalette: IColors = {
  text: '#000000',
  appBackground: '#ffffff',
};

export const getAppColors = (isDarkTheme: boolean): IColors => {
  return isDarkTheme ? darkPalette : lightPalette;
};
