import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const ListaSorteada = () => {

    const [itemText3, setItemText3] = useState("");
    const [items3, setItems3] = useState([]);

    const ArraysJuntos = ol
      

  return (
    <LinearGradient>
        <View> 
      <FlatList
      data={items3}
      renderItem={(itemData3)}
      >
        
      </FlatList>
      </View>
    </LinearGradient>
  )
}

export default ListaSorteada

const styles = StyleSheet.create({})