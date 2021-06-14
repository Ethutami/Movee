import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {removeData} from '../../Storage';
const logout = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        AsyncStorage.removeItem('access_token', (err) => {
          if (!err) {
            navigation.navigate('Login');
          } else {
            alert(
              'Error Sist!'
            )
          }
        })
        // const logout = await removeData('access_token');
        //console.log(logout);
      }}>
      <View style={styles.btnLogin}>
        <Text style={styles.btnLogin_text}>LOGOUT ..</Text>
      </View>
    </TouchableOpacity>
  );
};

export default logout;

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: '#250E62',
    width: 124,
    height: 45,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  btnLogin_text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
