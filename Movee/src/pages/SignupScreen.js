import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { asin } from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import BtnSignupComponent from '../component/button/signUp';

import {post_data_register} from '../redux/action/actionRegister';

const SignupScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    "name": "",
    "email": "",
    "password": "",
    "confirmPassword": "",
    "username": ""
  });

  const btnSignup = async () => {
    if (
      data.name !== '' &&
      data.email !== '' &&
      data.password !== '' &&
      data.username !== '' &&
      data.confirmPassword === data.password
    ) {
      setData({
        "name": "",
        "email": "",
        "password": "",
        "confirmPassword": "",
        "username": ""
      })
      await dispatch(post_data_register(data));
      navigation.navigate('TabNav');
    } else {
      alert('data harus terisi semua');
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.signupView}>
          <Text style={styles.signup_Text}>Name</Text>
          <TextInput
            style={styles.signup_line}
            onChangeText={changeName => setData({...data, name: changeName})}
            velue={data.name}
          />
          <Text style={styles.signup_Text}>Username</Text>
          <TextInput
            style={styles.signup_line}
            onChangeText={changeUsername =>
              setData({...data, username: changeUsername})
            }
            value={data.username}
          />
          <Text style={styles.signup_Text}>Email</Text>
          <TextInput
            style={styles.signup_line}
            onChangeText={changeEmail => setData({...data, email: changeEmail})}
            value={data.email}
          />
          <Text style={styles.signup_Text}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.signup_line}
            onChangeText={changePassword =>
              setData({...data, password: changePassword})
            }
            value={data.password}
          />
          <Text style={styles.signup_Text}>confirmPassword</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.signup_line}
            onChangeText={changeConfirPass =>
              setData({...data, confirmPassword: changeConfirPass})
            }
            value={data.confirPassword}
          />
        </View>

        <BtnSignupComponent tes={btnSignup} />
        <View style={styles.dontHaveAccout}>
          <Text style={styles.signup_Text}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signup_Text}>{`  Sign In`}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1F2A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp(10),
  },
  signupView: {
    justifyContent: 'center',
    marginHorizontal: '20 %',
    marginVertical: 20,
    width: wp(90),
  },
  signup_Text: {
    color: '#F2F2F2',
  },
  signup_line: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    marginBottom: 20,
    color: '#ffffff',
  },
  dontHaveAccout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(90),
  },
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
