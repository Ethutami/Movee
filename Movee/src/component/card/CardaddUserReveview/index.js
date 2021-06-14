import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import user from '../../../asset/images/user.png';

import Send_icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { post_review_user } from '../../../redux/action/actionReviews';

const index = () => {
  const detailsMovie = useSelector(state => state.movieReducer.details);
  const dispatch = useDispatch()
  //console.log('ini det', detailsMovie.id);

  const [myReview, setMyReview] = useState({
    rating: 5,
    review: 'The movie starts of somewhat dark and grim but I guess that was to be suspected. It cheered up as it moved along and then ending … well to me at least it was mostly satisfactory.',
    movieId: '',
  });
  useEffect(() => {
    setMyReview({...myReview, movieId: detailsMovie.id})
  }, [detailsMovie])
  return (
    <View>
      <View style={styles.informationWrapped}>
        <Text style={styles.informationText}>
          Remember to keep comments respectful
        </Text>
      </View>
      <View style={styles.commentWrapped}>
        <Image source={user} style={styles.cardList_user} />
        <View style={{flexDirection: 'row', marginStart: 10, justifyContent:'space-between', width:wp(78)}}>
          <TextInput
            placeholder="Add a public comment..."
            style={styles.textComment}
            onChangeText={(text) => setMyReview({...myReview, review: text})}
          />
          <TouchableOpacity
          onPress={()=>{
            dispatch(post_review_user(myReview))
            setMyReview('')
          }}
          >
            <Send_icon name='send' size={30} color='#ffffff'/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  informationWrapped: {
    width: wp(95),
    height: hp(4),
    justifyContent: 'center',
  },
  informationText: {
    color: '#fff',
    fontSize: 12,
  },
  cardList_user: {
    height: 40,
    width: 40,
  },
  commentWrapped: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#3D3B4B',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
  },
  textComment: {color: '#fff'},
});
