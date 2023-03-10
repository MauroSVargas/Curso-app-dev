import React, {useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList, Pressable} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();


import EnviarFormulario from './src/components/Modal';
import Card from './src/components/card';
import ColorsAndSize from './src/components/constantes/ColorsAndSize';
import ChooseItem from './src/components/ChooseItem';

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

  const [itemText, setItemText] = useState("");
  const [itemText2, setItemText2] = useState("");
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [template, setTemplate]=useState("");
  const titleText = "food"
  const titleText2 = "drinks"

  const onChangeText = (text) => {
    setItemText(text);
  };

  const onChangeText2 = (text) => {
    setItemText2(text);
  };

  const addItemToState = () => {
    setItems((oldArry) => [...oldArry, { id: Date.now(), value: itemText }]);
    setItemText("");
  };

  const addItemToState2 = () => {
    setItems2((oldArry2) => [...oldArry2, { id: Date.now(), value: itemText2 }]);
    setItemText2("");
  };

  const openModal = (item,type) => {
    setSelectedItem(item)
    setTemplate(type)
    setModalVisible(true)
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id,type) => {
    setModalVisible(!modalVisible);
    type ==='food' ? setItems((oldArry) => oldArry.filter((item) => item.id !== id)) :
    setItems2((oldArry) => oldArry.filter((item) => item.id !== id)) ; setSelectedItem("")
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
     
  <LinearGradient style={styles.screen}
    colors={["#FEC0CE","#E3879E"]}>
  
  <Text style={styles.baseText}>
  <Text style={styles.titleText}>
    {titleText}
  </Text>
</Text>

<View style={styles.addItemInputContainer}> 
    <TextInput
      placeholder="Item de lista"
      style={styles.input}
      onChangeText={onChangeText}
      value={itemText}
      maxLength = {14}
    />
    <Button title="Agregar" disabled={itemText===''} onPress={addItemToState} />
  </View>

  <FlatList                      
    data={items}
    renderItem={(itemData) => (
      <Card openModal={openModal} itemData={itemData} type='food'/>)}

    keyExtractor={(item) => item.id.toString()}
    />



<Text style={styles.baseText}>
  <Text style={styles.titleText2}>
    {titleText2}
  </Text>
</Text>

<View style={styles.addItemInputContainer}> 
    <TextInput
      placeholder="Item de lista"
      style={styles.input}
      onChangeText={onChangeText2}
      value={itemText2}
    />
    <Button title="Agregar" disabled={itemText2 === ''} onPress={addItemToState2} />
  </View>

  <FlatList                      
    data={items2}
    renderItem={(itemData2) => (
      <Card itemData={itemData2} openModal={openModal} type= 'drinks'/>)}

    keyExtractor={(item2) => item2.id.toString()}
    />

{modalVisible&&<EnviarFormulario
Pressable={Pressable}
modalVisible={modalVisible}
onDeleteModal={onDeleteModal}
onCancelModal={onCancelModal}
selectedItem={selectedItem}
template={template}
/>}

<ChooseItem>
</ChooseItem>
  
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    ...ColorsAndSize.normalSize,
    padding: 35
  },

  addItemInputContainer: {
    marginTop: 20,
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 250,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },

  titleText: {
    flex: 1,
    fontSize: 32,
    fontFamily: 'OpenSans-Regular'
  },
  
  titleText2: {
    flex: 1,
    fontSize: 28,
    fontFamily: 'OpenSans-Bold'
  },
});

