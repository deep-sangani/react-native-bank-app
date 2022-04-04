import React from 'react';
import {Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
export default function ButtonComponent({title, onclick}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={() => onclick && onclick()}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3774CE',
    borderRadius: 10,
    padding: 15,
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
