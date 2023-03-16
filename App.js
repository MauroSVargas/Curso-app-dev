import React, {useState } from 'react';
import { Button, StyleSheet} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

import ColorAndSize from './src/constants/ColorAndSize';
import ChooseItem from './src/screens/ChooseItem';
import ListaSorteada from './src/screens/ListaSorteada';

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

const [itemsOrdenados, setItemsOrdenados] = useState([])

  if (!fontsLoaded) {
    return null;
  }

return (

    <LinearGradient style={styles.screen}
      colors={["#FEC0CE", "#E3879E"]}>

      {itemsOrdenados.length === 0 ?
        <ChooseItem setItemsOrdenados={setItemsOrdenados} /> :
        <ListaSorteada itemsOrdenados={itemsOrdenados} />}

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    ...ColorAndSize.normalSize,
    padding: 35
  }});
