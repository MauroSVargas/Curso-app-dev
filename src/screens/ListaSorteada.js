import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React, {useState, render} from 'react'
import Card from '../components/card'

const ListaSorteada = ({ ItemsOrdenados}) =>  {

const renderItem = (itemData) => {
  return (
      <Text>{itemData.item.value}</Text>
  )
}
  

  return (
    <FlatList
    data={ItemsOrdenados}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    />
  )
}

export default ListaSorteada 

