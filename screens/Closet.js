import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import AddItem from '../components/AddItem';
import WardrobeItem from '../components/WardrobeItem';
import { CATEGORIES, WARDROBE_ITEMS } from '../data/data';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fcbbc',
    paddingBottom: 160,
    flex: 1
  }
});

const ClosetScreen = ({route, navigation}) => {
  
  useLayoutEffect(() => {
    const categoryName = CATEGORIES.find(category => category.id === route.params?.categoryId)?.title || 'List';
    navigation.setOptions({
      title: categoryName
    });
  });
 
  const [isModalVisible, setModalVisibility] = useState(false);
  const [listOfItems, setListOfItems] = useState(WARDROBE_ITEMS.filter(item => item.categoryId === route.params?.categoryId));

  const onAddButtonPress = (inputItem) => {
    setListOfItems(currentList =>
      currentList ?
        [...currentList, {
          name: inputItem,
          id: currentList.length + 1
        }] :
        [{
          name: inputItem,
          id: 1
        }]
    );
    setModalVisibility(false);
  };

  const deleteItemHandler = (id) => {
    setListOfItems(currentList => currentList.filter(item => item.id !== id));
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
          listOfItems?.length ?
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
            keyExtractor={(item) => item.id}
            // alwaysBounceVertical={false}
          /> :
          <Text>No items in the wardrobe</Text>
        }
      </View>
    </View>
  );
};

export default ClosetScreen;