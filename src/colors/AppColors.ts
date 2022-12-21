export interface IColors {
  text: string;
  appBackground: string;
  focus: string;
}

const darkPalette: IColors = {
  text: '#ffffff',
  appBackground: '#434546',
  focus: 'gray'
};

const lightPalette: IColors = {
  text: '#000000',
  appBackground: '#ffffff',
  focus: 'white'
};

export const getAppColors = (isDarkTheme: boolean): IColors => {
  return isDarkTheme ? darkPalette : lightPalette;
};
