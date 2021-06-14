import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const signUp = ({tes}) => {
  return (
    <TouchableOpacity onPress={tes}>
      <View style={styles.btnLogin}>
        <Text style={styles.btnLogin_text}>SIGN UP</Text>
      </View>
    </TouchableOpacity>
  );
};

export default signUp;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: '#fff',
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
