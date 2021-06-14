import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LoginScreen = ({navigation}) => {
  const [dataLogin, setDataLogin] = useState({
    email: '',
    pass: '',
  });
  return (
    <View style={{margin: 15}}>
      <View style={{marginTop: '20%'}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.user_pass}> EMAIL</Text>
          <TextInput
            style={styles.user_pass_line}
            placeholder=""
            onChangeText={email => setDataLogin({...dataLogin, email: email})}
          />
          <Text style={styles.user_pass}> PASSWORD</Text>
          <TextInput
            style={styles.user_pass_line}
            placeholder=""
            onChangeText={pas => setDataLogin({...dataLogin, pass: pas})}
          />
        </View>
      </View>
      <View style={styles.SubmitButton}>
        <TouchableOpacity
          onPress={async () => {
            await storeData('data_login', dataLogin);
            //navigation.navigate('TabNavigator');
          }}>
          <Text style={styles.SubmitButtonText}> Log In </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  user_pass: {
    padding: 15,
    color: '#343437',
  },
  user_pass_line: {
    marginVertical: 8,
    marginHorizontal: 15,
    justifyContent: 'flex-start',
    fontSize: 15,
    borderBottomWidth: 1,
    marginHorizontal: 15,
    borderBottomColor: '#9AD6F2',
  },
  SubmitButton: {
    marginTop: 40,
    paddingVertical: 10,
    borderRadius: 8,
    width: wp('50'),
    height: hp('8'),
    backgroundColor: '#339CD8',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  SubmitButtonText: {
    color: '#EAEFF3',
    textAlign: 'center',

    fontSize: 20,
    fontFamily: 'AnticSlab-Regular',
  },
});
