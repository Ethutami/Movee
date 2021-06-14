import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { useSelector } from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { request_data_movie } from '../../../redux/action/actionMovie';
import Modal from 'react-native-modal';

import Delete_icon from 'react-native-vector-icons/AntDesign';
import Edit_icon from 'react-native-vector-icons/AntDesign';
import { request_all_my_reviews, request_delete_review, request_edit_review } from '../../../redux/action/actionReviews';

const index = () => {
  const dispatch = useDispatch()
  const myReviews = useSelector(state => state.ReviewReducer?.myReviews?.dataReview)
  const [ModalVisible, setModalVisible] = useState(false);
  const [newReview, setNewReview] = useState({
    rating : 5,
    review:''
  })
  const [idReview, setIdReview] = useState('')
  const toggleModal = params => {
    setModalVisible(!ModalVisible);
  };

 useEffect(() => {
  //console.log('ini myrwviews', myReviews);
  // dispatch(request_data_movie())
  dispatch(request_all_my_reviews())
 }, [myReviews])

  if (myReviews?.dataReview){
    const renderItem =({item})=>{
      //console.log(item);
          return(
            <>
            <View style={{width : wp(95), padding:10, marginBottom:8, flexDirection:'row'}}>
              <View style={{width:wp(75)}}>
                <Text 
                  style={{
                    fontSize:18, 
                    fontWeight:'bold', 
                    marginBottom:8, 
                    color:'#ffffff'
                  }}>
                  {item.movieId.title}
                </Text>
                <Text 
                  style={{
                    fontSize:10, 
                    marginBottom:8, 
                    color:'#ffffff'
                  }}>
                  {item.createdAt}
                </Text>
                <Text style={{color:'#ffffff'}}>{item.review}</Text>
              </View> 
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity 
                  style={{}}
                  onPress={()=>{
                   dispatch(request_delete_review(item._id))
                  }}>
                  <Delete_icon 
                    name='delete' 
                    color='#b91903' 
                    size={25} />    
                </TouchableOpacity>
                <TouchableOpacity  
                  style={{}}
                  onPress={()=> {
                    setNewReview({...newReview, review: item.review})
                    setIdReview(item._id)
                    toggleModal()}}
                  >
                  <Edit_icon 
                    name='edit' 
                    color='#b91903' 
                    size={25}/>  
                </TouchableOpacity> 
              </View>  
            </View>
            <View 
                  style={{
                    width:wp(95),
                    borderBottomWidth:1, 
                    marginTop:10, 
                    borderBottomColor:'#ffffff'
                  }}>
              </View>
            <Modal isVisible={ModalVisible} style={styles.modal_add}>
              <View>
                <TextInput
                  style={styles.modal_headline}
                  value={newReview.review}
                  multiline={true}
                  onChangeText={(text)=> setNewReview({...newReview, review: text})}
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
                    dispatch(request_edit_review(newReview, idReview))
                    toggleModal()}}>
                    <Text style={styles.Modal_Item_Text}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => toggleModal()}>
                    <Text style={styles.Modal_Item_Text}>Close</Text>
                  </TouchableOpacity>
                </View>
           </View>
            </Modal>
           </>
            )
    }
    return(
    <View style={{padding: 5, alignItems:'center'}}>
      <FlatList
      // contentContainerStyle={{paddingBottom:10}}
            data={myReviews}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
    </View>
    )
  }else{
  return (
    <View style={{padding: 5, backgroundColor:"#ffffff"}}>
    <Text>add your review</Text>
    </View>
  );
 }
};


export default index;

const styles = StyleSheet.create({
  modal_add: {
    //justifyContent: 'flex-end',
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
