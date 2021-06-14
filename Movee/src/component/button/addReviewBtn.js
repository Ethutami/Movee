import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Add_icon from 'react-native-vector-icons/Ionicons';

const addReview = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.iconWrapped}>
      <TouchableOpacity onPress={() => toggleModal()}>
        <Add_icon name="add" size={30} color="#e99" />
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modal_addComment}>
          <Text style={styles.modal_text}>
            How do you think about this movie?!
          </Text>
          <Text style={styles.modal_text}>Your rating: 0</Text>
          <TextInput
            style={styles.modal_headline}
            placeholder="Write a headline for your review here"
          />
          <TextInput
            style={styles.modal_yourReview}
            placeholder="Write your review here"
            multiline={true}
          />
          <TouchableOpacity style={styles.modal_Btn}>
            <Text style={styles.modal_BtnTxt}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modal_close}
            onPress={() => toggleModal}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default addReview;

const styles = StyleSheet.create({
  iconWrapped: {
    position: 'absolute',
    bottom: hp(3),
    right: wp(4),
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e45',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_addComment: {
    width: wp(90),
    height: hp(60),
    backgroundColor: '#FFE7AB',
    borderRadius: 20,
    alignItems: 'center',
    padding: 16,
  },
  modal_text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modal_headline: {
    width: wp(80),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  modal_yourReview: {
    width: wp(80),
    height: hp(25),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  modal_Btn: {
    backgroundColor: '#000000',
    borderRadius: 10,
    width: 97,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_BtnTxt: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  modal_close: {
    backgroundColor: '#8E8E93',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -2,
    top: wp(-2),
  },
});
