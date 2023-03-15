import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'



const ListaSorteada = () => {
/*
    const [itemText3, setItemText3] = useState("");
    const [items3, setItems3] = useState(SortItems());

    const ArrayNuevo = () =>
    items3 (NewArry => [sortItems(), {value:itemText3}]);
    setItemText3("");
      
*/
  return (
    <LinearGradient>
      <View> 
      <Button title='Ordenar Items'  onPress ={() =>
SortItems}/>

<FlatList                      
    data={items3}
    renderItem={() => {
      SortItems}}

    keyExtractor={(item3) => item3.toString()}
    />
    </View>
    </LinearGradient>
  )
}

export default ListaSorteada

const styles = StyleSheet.create({})