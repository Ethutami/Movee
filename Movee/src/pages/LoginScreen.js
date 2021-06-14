import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BtnLoginComponent from '../component/button/login';
import MovieeLogo from '../asset/images/movee.png';
import {getData} from '../Storage';
import {useDispatch} from 'react-redux';
import {post_data_login} from '../redux/action/actionRegister';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [dataLogin, setDataLogin] = useState({
    email: 'yayalala@gmail.com',
    password: 'Tami123_',
  });
 


  const btnLogin =  async () => {
    if (dataLogin.email !== '' && dataLogin.password !== '') {
      //"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA3YWVlMjExNGJkZjEzNTc1ZWI3MTc3In0sImlhdCI6MTYxOTA3MTU0NywiZXhwIjoxNjI0MjU1NTQ3fQ.AXjZ168EWT4RC4Q3bMGnxE6LmSdukxeoSRA8hkOc9QY"
        let email = dataLogin.email
        let pass = dataLogin.password
        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(email.includes('@') && email.includes('.')){
          if (pass.match(/\b[ABCDEFGHIJKLMNOPQRSTUFWXYZ]/g) 
              && pass.match(/[0-9]/) 
              && format.test(pass)
            ){
              setDataLogin({
                email: '',
                password: '',
              })
              await dispatch(post_data_login(dataLogin));
              navigation.navigate('TabNav')
            }else{
              alert('invalid password')
            }
        }else{
            alert('invalid email')
        }
    } else {
      alert('email or password does not exist');
    }
  };

  



  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image
          source={MovieeLogo}
          style={{width: wp(50), height: hp(15), resizeMode: 'stretch'}}
        />
      </View>
      <View style={styles.loginView}>
        <Text style={styles.login_Text}>Email</Text>
        <TextInput
          value={dataLogin.email}
          style={styles.login_line}
          onChangeText={setDataLogin}
        />
        <Text style={styles.login_Text}>Password</Text>
        <TextInput
          value={dataLogin.password}
          style={styles.login_line}
          secureTextEntry={true}
          onChangeText={setDataLogin}
        />
      </View>
      <View style={styles.forgotPass}>
        <Text style={styles.login_Text}>Forgot your password?</Text>
      </View>
      <BtnLoginComponent
       btnLogin={btnLogin}
      />
      <View style={styles.dontHaveAccout}>
        <Text style={styles.login_Text}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.login_Text}>{`  Sign Up`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1F2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    flexDirection: 'column',
  },
  loginView: {
    justifyContent: 'center',
    marginHorizontal: '20 %',
    marginVertical: 20,
    width: wp(90),
  },
  login_Text: {
    color: '#ffffff',
  },
  login_line: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    marginBottom: 20,
    color: '#ffff',
  },
  forgotPass: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 20,
    width: wp(90),
  },
  dontHaveAccout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(90),
  },
});
