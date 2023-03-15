import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import Card from './card'
import Modal from './Modal'
import EnviarFormulario from './Modal'

const ListaSorteada = () => {

    const [itemText3, setItemText3] = useState("");
    const [items3, setItems3] = useState(ArrayNuevo);

    const ArrayNuevo = () =>
    setItems3 ((NewArry) => [sortItems(), {id: Date.now(), value:itemText3 }]);
    setItemText3("");
      
    return (
      <View> 
      <Button title='Ordenar Items'  onPress ={() =>
        SortItems()}/>
        
        <FlatList                      
            data={items3}
            renderItem={(itemData3) => {
              ArrayNuevo}}
            />
            </View>
)}

export default ListaSorteada

const styles = StyleSheet.create({})