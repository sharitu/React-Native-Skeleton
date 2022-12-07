import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const WardrobeItem = ({item, onDeleteItem}) => {

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#84c5d9',
      flexDirection: 'row',
      justifyContent: "space-between"
    },
    cancelCTA: {
      height: 24,
      width: 24
    }
  });

  function deleteItemHandler () {
    onDeleteItem(item.id)
  }

  return (
    <Pressable onPress={onDeleteItem.bind(this, item.key)}>
      <View style={styles.container}>
        <Text>{item.name}</Text>
        <Image
          style={styles.cancelCTA}
          source={ require('../assets/cancel.png') }
        />
      </View>
    </Pressable>
  );
};

export default WardrobeItem