import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React, {useState, render} from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import ChooseItem from './ChooseItem'
import Card from './card'

const ListaSorteada = ({

  items,
  items2,
  itemData,
  itemData2,

}) => { 
  const [SortList, setSortList] = useState(ItemsOrdenados)
  /*
const [SortList, setSortList] = useState();
const [items3, setItems3] = useState([]);

const ItemsOrdenados = () => {
  setItems3((SortList) => [...SortList, { id: Date.now()},
  ...oldArry, { id: Date.now(), value: itemText } ,
  ...oldArry2, { id: Date.now(), value: itemText2 }]);
}

*/
    return (
      <View> 
      <FlatList
        data={(items, items2)}
        renderItem={(itemData, itemData2) => (
          setSortList)}
          
      />
      </View> 
      
         
        
)}

export default ListaSorteada

