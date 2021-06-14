import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';
import { useSelector,useDispatch } from 'react-redux';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import Img from '../../asset/images/user.png';
import Bck_icon from 'react-native-vector-icons/Ionicons';
import Edit_icon from 'react-native-vector-icons/AntDesign';
import EdtBtn_icon from 'react-native-vector-icons/Feather';
import { update_user_info } from '../../redux/action/actionRegister';



const EditProfileScreen = () => {
 
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const dataUser = useSelector(state => state.userReducer.dataUser)
  const [dataUpdate, setDataUpdate] = useState({
    name :dataUser.name,
    email:dataUser.email,
  });
  const [profilePicture, setProfilePicture] = useState({
    fileName:'',
    type:'',
    uri:'',
  })
  const [state1, setState1] = useState();
  const [state2, setState2] = useState()
  const [state3, setState3] = useState()
  const [ModalVisible, setModalVisible] = useState(false);
  
 
  const update = (key, value) =>{  
    let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (key === 'name' && value !== ''){

      dispatch(update_user_info({...dataUpdate, name: value}, profilePicture))
    }else if (key === 'email' && value !== ''){
      if(value.includes('@') && value.includes('.')){
        setDataUpdate({...dataUpdate, email: value})
      }else{
        alert('invalid email!')
      }
    }else{
      dataUpdate
    }

  }

  const toggleModal = params => {
    setModalVisible(!ModalVisible);
  };

  // useEffect(() => {
  //   setDataUpdate({name: dataUser?.name, email:dataUser?.email})
  // }, [dataUser])

  if(dataUser?.name){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Bck_icon
            name="caret-back"
            size={30}
            color="#fff"
            onPress={() => {
              navigation.goBack()
            }}
          />
          <Text style={styles.header_Text}>Edit Profile</Text>
        </View>
        <View style={styles.logo_image}>
        <Image
          style={styles.logo_image}
          source={dataUser?.image !== null ? {uri: dataUser.image} : Img}
        />
          <View style={styles.editButton}>
            <TouchableWithoutFeedback
              onPress={
                () =>
                  launchCamera({}, e => {
                  setProfilePicture({fileName: e.fileName, type:e.type, uri:e.uri});
                    console.log('pic',e);
                  })
              }>
              <EdtBtn_icon name="camera" size={25} color="#fff" />
            </TouchableWithoutFeedback>
          </View>
      
        </View>
        <View style={styles.infoWrapped}>
          <View style={styles.infoItem}>
            <Text style={styles.Item_Text}>{dataUser.name}</Text>
            <Edit_icon
              name="edit"
              size={25}
              color="#fff"
              onPress={() => {
                setState2(dataUser.name);
                setState1('name')
                toggleModal();
              }}
            />
          </View>
          <View style={styles._line}></View>
          <View style={styles.infoItem}>
            <Text style={styles.Item_Text}>{dataUser.email}</Text>
            <Edit_icon
              name="edit"
              size={25}
              color="#fff"
              onPress={() => {
                setState2(dataUpdate.email);
                setState1('email')
                toggleModal();
              }}
            />
          </View>
          <View style={styles._line}></View>
        </View>
  
        <Modal isVisible={ModalVisible} style={styles.modal_add}>
          <View>
            <TextInput
              style={styles.modal_headline}
              placeholder={state2}
              secureTextEntry={state2 === 'password' ? true :false}
              onChangeText={(text)=> setState3(text)}
            />
            <View
              style={{
                flexDirection: 'row',
                width: wp(100),
                justifyContent: 'flex-end',
                paddingEnd: 20,
              }}>
              <TouchableOpacity
              onPress={()=> {
                update(state1, state3) 
                toggleModal()}}>
                <Text style={styles.Modal_Item_Text}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleModal()}>
                <Text style={styles.Modal_Item_Text}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
     );
   }else{
     return (
        <View>
          <Text>someting wrong</Text>
        </View>
     )
   }

};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1F2A',
    alignItems: 'center',
  },
  header: {
    width: wp(100),
    height: 62,
    backgroundColor: '#250E62',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 35,
  },
  header_Text: {
    marginLeft: 10,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo_image: {
    marginTop: hp(10),
  },
  logo_image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editButton: {
    height: 40,
    width: 40,
    position: 'absolute',
    bottom: -2,
    left: 75,
    backgroundColor: '#e45',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  infoWrapped: {
    justifyContent: 'center',
    marginHorizontal: '20 %',
    marginVertical: '15%',
    width: wp(90),
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  Item_Text: {
    color: '#fff',
  },
  _line: {
    borderBottomColor: '#fff',
    borderWidth: 0.5,
    marginBottom: 25,
  },
  modal_add: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal_headline: {
    width: wp(100),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  Modal_Item_Text: {
    color: '#fff',
    marginLeft: 30,
    fontSize: 18,
  },
});
