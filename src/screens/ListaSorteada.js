import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React, {useState, Render} from 'react'
import ChooseItem from './ChooseItem'


const ListaSorteada = ({ itemsOrdenados }) => {

  //Definir la función que se encargará de renderizar cada elemento de la lista
  const renderItem = ({itemData}) => {
      return (
        <Text>{itemData.item.value}</Text>
      )
    }

  return (
    <FlatList
      data={itemsOrdenados}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}
export default ListaSorteada 