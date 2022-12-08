import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import NGridTile from '../components/NGridTile';
import { CATEGORIES } from '../data/data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#8fcbbc'
  },
  list: {
    flex: 1
  }
});

function renderCategory (itemData) {
  return <NGridTile {...itemData.item} />;
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={CATEGORIES}
        renderItem={renderCategory}
        keyExtractor={(item => item.id)}
        numColumns={3}
      />
    </View>
  );
};

export default HomeScreen;