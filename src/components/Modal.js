import { Text, View } from 'react-native'
import React from 'react'
import { StyleSheet, Modal} from 'react-native';

import ColorAndSize from '../constants/ColorAndSize';

const EnviarFormulario = ({ 
 
    modalVisible,
    onDeleteModal,
    Pressable,
    onCancelModal,
    selectedItem,
    template
    
  }) => { 


 return ( 
 <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Eliminar Item</Text>
            <Text style={styles.modalText}>
              ¿Está seguro que desea eliminar el item{" "}
              <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
            </Text>
        <View style={styles.modalActions}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={onCancelModal}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={() => {
                  onDeleteModal(selectedItem.id,template);
                }}
              >
                <Text style={styles.textStyle}>Eliminar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
 );
};

 const styles = StyleSheet.create({

  modalMainView: {
    ...ColorAndSize.normalSize,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#8B575C",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 30,
    padding: 10,
    marginHorizontal: 10,
    color: "#8B575C",
  },
  buttonCancel: {
    backgroundColor: "lime",
  },
  buttonDelete: {
    backgroundColor: "#f44336",
  },
});
  
  export default EnviarFormulario