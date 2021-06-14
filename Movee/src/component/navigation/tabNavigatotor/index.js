import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import MaterialComunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ProfileScreen from '../../../pages/profile/ProfileScreen';
import StackNavigator from '../stakNavigator';

const TabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="StackNav"
      labeled={false}
      activeColor="#fff"
      inactiveColor="#1D1F2A"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let home;
          let profile;

          if (route.name === 'StackNav') {
            home = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            profile = focused ? 'user-circle' : 'user-circle-o';
          }
          // You can return any component that you like here!
          return (
            <View style={{flexDirection: 'row'}}>
              <MaterialComunityIcon name={home} size={27} color={color} />
              <FontAwesome name={profile} size={23} color={color} />
            </View>
          );
        },
      })}
      barStyle={{backgroundColor: '#250E62'}}>
      <Tab.Screen
        name="StackNav"
        component={StackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
