```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

const RedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    margin: 5,
  },
});

export default RedScreen;
```;
export {};