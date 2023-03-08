import { Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'

const Card = ({openModal, itemData, type}) => {

  return (

    <Pressable
        style={styles.itemContainer}
        onPress={() => {
          openModal(itemData.item, type);
        }}
      >
        <Text style={styles.item}>{itemData.item.value}</Text>
      </Pressable>
  )
}

export default Card

const styles = StyleSheet.create({

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
})
