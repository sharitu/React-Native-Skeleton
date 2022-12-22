import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

const styles = StyleSheet.create({
  addContainer: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.6)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 6,
    marginBottom: 16,
    padding: 16,
    fontSize: 36,
    width: '90%'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    marginHorizontal: 8
  },
  addIcon: {
    width: 100,
    height: 100,
    marginBottom: 24,
    tintColor: '#8fcbbc'
  }
});
const AddItem = (props) => {
  const [inputItem, setNewItem] = useState('');

  function addItemHandler() {
    props.onAddItem(inputItem);
    itemInputHandler('');
  }

  function itemInputHandler(enteredText) {
    setNewItem(enteredText);
  }

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.addContainer}>
        <View style={styles.modalView}>
          <Image source={require('../assets/closet.png')} style={styles.addIcon} />
          <TextInput
            placeholder='Blue Jeans, LBB etc'
            onChangeText={itemInputHandler}
            value={inputItem}
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Cancel"
                onPress={props.onCancel}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Add to Wardrobe"
                disabled={inputItem.length <= 0}
                onPress={addItemHandler}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddItem;