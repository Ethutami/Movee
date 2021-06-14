import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {getData} from '../Storage/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}) => {
  const data = AsyncStorage.getItem('data_login');
  const [dataLogin, setDataLogin] = useState();

  //   return
  // };`
  useEffect(() => {
    data.then(tes => console.log(typeof tes));
    //console.log(data);
  }, [data]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EAEFF3',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
      }}>
      <Image
        source={{
          uri: 'https://randomuser.me/api/portraits/women/17.jpg',
        }}
        style={{width: 150, height: 150, margin: 30, borderRadius: 75}}
      />
      <Text style={{fontSize: 30}}>{dataLogin.email}</Text>
      <Text>Yang Cantik</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
