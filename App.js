import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello world!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default App;
