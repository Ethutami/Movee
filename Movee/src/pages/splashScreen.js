import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const splashScreen = ({navigation}) => {
  useEffect(() => {
    AsyncStorage.getItem('access_token')
      .then(res => {
        if(res) navigation.navigate('TabNav')
        else navigation.navigate('Login')
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50}}>Authenticating..</Text>
    </View>
  );
};

export default splashScreen;

const styles = StyleSheet.create({});
