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

const PinScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pin Screen</Text>
    </View>
  );
};

export default PinScreen;