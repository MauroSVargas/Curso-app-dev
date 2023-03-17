import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React, {useState, Render} from 'react'
import ColorAndSize from '../constants/ColorAndSize'



const ListaSorteada = ({ itemsOrdenados }) => {

  //Definir la función que se encargará de renderizar cada elemento de la lista
  const renderItem = ( {item} ) => {

    return (
      <View style={styles.screen}>
      <Text>{item.value}</Text>
      </View>
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

const styles = StyleSheet.create({
  screen: {
    ...ColorAndSize.normalSize,
    padding: 35
  }});