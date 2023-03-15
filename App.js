import React, {useState } from 'react';
import { Button, StyleSheet} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

import ColorsAndSize from './src/components/constantes/ColorsAndSize';
import ChooseItem from './src/components/ChooseItem';
import ListaSorteada from './src/components/ListaSorteada';

export default function App() {
  const [fontsLoaded] = useFonts({
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf')
  });

React.useEffect(() => {
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
} , [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

return (

<LinearGradient style={styles.screen}
  colors={["#FEC0CE","#E3879E"]}>

<ChooseItem>
</ChooseItem>



</LinearGradient>
);}

const styles = StyleSheet.create({
  screen: {
    ...ColorsAndSize.normalSize,
    padding: 35
  }});
