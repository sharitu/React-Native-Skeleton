import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const WardrobeItem = ({item, onDeleteItem}) => {

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 24,
      paddingTop: 24,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      borderRadius: 16
    },
    image: {
      flex: 1,
      height: 120,
      maxWidth: '50%',
      borderWidth: 2,
      borderColor: '#8fcbbc'
    },
    itemCTAContainer: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: 'row'
    },
    cta: {
      flex: 1,
      alignItems: 'center',
      padding: 12,
      fontSize: 12
    },
    content: {
      flex: 1,
      alignItems: "center",
      flexDirection: 'row',
      width: '100%'
    },
    itemDetails: {
      padding: 16
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: item.uri
          }}
          style={styles.image}
        />
        <View style={styles.itemDetails}>
          <Text>{item.name.toUpperCase()}</Text>
          <Text>Last Worn on: {item.lastWorn}</Text>
          <Text>Added on: {item.dateAdded}</Text>
          <Text>Added on: {item.dateAdded}</Text>
        </View>
      </View>
      <View style={styles.itemCTAContainer}>
        <Pressable
          style={styles.cta}
          // onPress={onDeleteItem.bind(this, item.id)}
        >
          <Text style={{color: '#16b872'}}>EDIT</Text>
        </Pressable>
        <Pressable
          style={styles.cta}
          onPress={onDeleteItem.bind(this, item.id)}
        >
          <Text style={{color: 'red'}}>DELETE</Text>
          {/* <Image
            style={styles.cancelCTA}
            source={ require('../assets/cancel.png') }
          /> */}
        </Pressable>
      </View>
    </View>
  );
};

export default WardrobeItem