```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

const RedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redBox: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 20,
  },
});

export default RedScreen;
```;
export {};