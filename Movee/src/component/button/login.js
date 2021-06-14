import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const login = ({btnLogin}) => {
  return (
    <TouchableOpacity onPress={btnLogin}>
      <View style={styles.btnLogin}>
        <Text style={styles.btnLogin_text}>SIGN IN</Text>
      </View>
    </TouchableOpacity>
  );
};

export default login;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: '#FFFFFF',
    width: 124,
    height: 45,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  btnLogin_text: {
    color: '#1D1F2A',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
