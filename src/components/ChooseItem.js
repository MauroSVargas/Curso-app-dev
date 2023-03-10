import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'


const ChooseItem = () => {

    const [confirmed, setConfirmed] = useState([]);

    const resetInputHandler = () => {
        setConfirmed(false);
      }

    const SortItems = () => {
        setConfirmed((NewArry) => [...oldArry, { id: Date.now(), value: itemText }] ,
        [...oldArry2, { id: Date.now(), value: itemText2 }])
        confirmed("");
    }
    
/*
    const ListaDeItems = { 
      (if ListaDeItems  undefined) {
        return
      }
      
      setConfirmed(true)
      setEnteredValue('') }
*/
  
  
  
    return (
        <View> 
    <Button title='Sortear Items' onPress={SortItems}/>
    </View>
  )
}

export default ChooseItem

const styles = StyleSheet.create({

})