import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import AddItem from '../components/AddItem';
import WardrobeItem from '../components/WardrobeItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fcbbc'
  }
});

const HomeScreen = () => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [listOfItems, setListOfItems] = useState();

  const onAddButtonPress = (inputItem) => {
    setListOfItems(currentList =>
      currentList ?
        [...currentList, {
          name: inputItem,
          key: currentList.length + 1
        }] :
        [{
          name: inputItem,
          key: 1
        }]
    );
    setModalVisibility(false);
  };

  const deleteItemHandler = (key) => {
    setListOfItems(currentList => currentList.filter(item => item.key !== key));
  }

  function viewAddItemSection () {
    setModalVisibility(true);
  }

  function dismissModal () {
    setModalVisibility(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add" onPress={viewAddItemSection} />
      <AddItem
        visible={isModalVisible}
        onAddItem={onAddButtonPress}
        onCancel={dismissModal}
      />
      <View style={styles.addContainer}>
        {
          listOfItems ?
          <FlatList
            data={listOfItems}
            renderItem={(itemData) => {
              return (
                <WardrobeItem
                  item={itemData.item}
                  onDeleteItem={deleteItemHandler}
                />
              )
            }}
            alwaysBounceVertical={false}
          /> :
          <Text>No items in the wardrobe</Text>
        }
      </View>
    </View>
  );
};

export default HomeScreen;