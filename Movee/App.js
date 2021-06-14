/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './src/pages/splashScreen';
import Login from './src/pages/LoginScreen';
import Signup from './src/pages/SignupScreen';
import TabNavigator from './src/component/navigation/tabNavigatotor';
import EditProfile from './src/pages/profile/EditProfileScreen';
import LoadingScreen from './src/pages/LoadingScreen'
import Tes from './src/pages/LoadingScreen';
import SplashScreen from './src/pages/splashScreen';

const App: () => Node = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
         
        <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TabNav"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>

      {/* <Tes /> */}
    </Provider>
  );
};

export default App;
