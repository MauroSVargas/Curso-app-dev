import React from 'react';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';

import MainNavigator from './src/navigators/MainNavigator';
//import store from './src/store'

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [FontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  })

  React.useEffect(() => {
    if (FontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [FontsLoaded])

  if (!FontsLoaded) {
    return null;
  }

  return (
      <MainNavigator />
  );
}
