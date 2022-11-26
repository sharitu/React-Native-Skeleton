import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
  }
});

const ClosetScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Closet Screen</Text>
    </View>
  );
};

export default ClosetScreen;