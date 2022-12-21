import 'react-native-gesture-handler';
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {getAppColors, IColors} from './src/colors/AppColors';
import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationContainer} from '@react-navigation/native';
const {width} = Dimensions.get('window');
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import StackNavigation from './src/navigation/StackNavigation';

export const ThemeContext = React.createContext<{appColors: IColors}>({});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const appColors = getAppColors(isDarkMode);

  EStyleSheet.build({
    $rem: width / 25,
  });

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{appColors}}>
        <SafeAreaView
          style={{flex: 1, backgroundColor: appColors.appBackground}}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={appColors.appBackground}
          />
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
