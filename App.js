import React, {useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList, Pressable} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import EnviarFormulario from './src/components/ejemplosTp';

export default function App() {
  const [itemText, setItemText] = useState("");
  const [itemText2, setItemText2] = useState("");
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [titleText] = useState("Comida");
  const [titleText2] = useState("Bebidas");

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

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem("");
  };

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
    />
    <Button title="Agregar" onPress={addItemToState} />
  </View>

  <FlatList                      
    data={items}
    renderItem={(itemData) => (
      <Pressable
        style={styles.itemContainer}
        onPress={() => {
          openModal(itemData.item);
        }}
      >
        <Text style={styles.item}>{itemData.item.value}</Text>
      </Pressable>
    )}
    keyExtractor={(item) => item.id.toString()}
    />



<Text style={styles.baseText}>
  <Text style={styles.titleText}>
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
    <Button title="Agregar" onPress={addItemToState2} />
  </View>

  <FlatList                      
    data={items2}
    renderItem={(itemData2) => (
      <Pressable
        style={styles.itemContainer}
        onPress={() => {
          openModal(itemData2.item);
        }}
      >
        <Text style={styles.item}>{itemData2.item.value}</Text>
      </Pressable>
    )}
    keyExtractor={(item2) => item2.id.toString()}
    />

<EnviarFormulario
Pressable={Pressable}
modalVisible={modalVisible}
onDeleteModal={onDeleteModal}
onCancelModal={onCancelModal}
/>

  
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:  1,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
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
  itemContainer: {
    margin: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  item: {
    padding: 10,
    textAlign: "center",
  },

  titleText: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
  },
});

/*
<EnviarFormulario
Pressable={Pressable}
modalVisible={modalVisible}
onDeleteModal={selectedItem}
onCancelModal={onCancelModal}
/>*/