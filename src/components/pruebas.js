/*<View style={styles.addItemInputContainer}> 
    <TextInput
      placeholder="Item de lista"
      style={styles.input}
      onChangeText={onChangeText}
      value={itemText}
      maxLength = {14}
    />
    <Button title="Agregar" disabled={itemText===''} onPress={addItemToState} />
  </View>

  <FlatList                      
    data={items}
    renderItem={(itemData) => (
      <Card openModal={openModal} itemData={itemData} type='food'/>)}

    keyExtractor={(item) => item.id.toString()}
    />


<Text style={styles.baseText}>
  <Text style={styles.titleText2}>
    {titleText2}
  </Text>
</Text>

<View style={styles.addItemInputContainer}> 
    <TextInput
      placeholder="Item de lista"
      style={styles.input}
      onChangeText={onChangeText2}
      value={itemText2}
    />
    <Button title="Agregar" disabled={itemText2 === ''} onPress={addItemToState2} />
  </View>

  <FlatList                      
    data={items2}
    renderItem={(itemData2) => (
      <Card itemData={itemData2} openModal={openModal} type= 'drinks'/>)}

    keyExtractor={(item2) => item2.id.toString()}
    />
    
    const styles = StyleSheet.create({
        screen: {
          ...ColorsAndSize.normalSize,
          padding: 35
        },
      
        addItemInputContainer: {
          marginTop: 20,
          padding: 20,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        },
        input: {
          width: 250,
          borderBottomColor: "black",
          borderBottomWidth: 1,
        },
      
        titleText: {
          flex: 1,
          fontSize: 32,
          fontFamily: 'OpenSans-Regular'
        },
        
        titleText2: {
          flex: 1,
          fontSize: 28,
          fontFamily: 'OpenSans-Bold'
        },
      });
      
      {modalVisible&&<EnviarFormulario
        Pressable={Pressable}
        modalVisible={modalVisible}
        onDeleteModal={onDeleteModal}
        onCancelModal={onCancelModal}
        selectedItem={selectedItem}
        template={template}
        />}*/