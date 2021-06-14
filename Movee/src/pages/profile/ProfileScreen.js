import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import BtnLogoutComponent from '../../component/button/logout';
import MyReviewComponent from '../../component/card/CardMyReview';
import MyWatchlistComponent from '../../component/card/CardMyWatchlist';
import Img from '../../asset/images/user.png';

import { getData } from '../../Storage';
import { useDispatch } from 'react-redux';
import { request_data_user } from '../../redux/action/actionRegister';
import { useSelector } from 'react-redux';

const ProfileScreen = ({navigation}) => {
  const token = getData('access_token');
  const dispatch = useDispatch()
  const dataUser = useSelector(state => state.userReducer.dataUser)
 
  const [image, setImage] = useState('')
  const [tabs, setTabs] = useState('Review');
 // console.log(dataUser);


  useEffect(() => {
    token
    .then(res=> {
        dispatch(request_data_user(res))
        // console.log('ini res', res)
      })
      .catch(err => console.log(err));
  }, [token])

  return (
    <View style={styles.Wrapped}>
      <View style={styles.container}>
        <View style={styles.logo_imageWrapped}>
          <Image
            style={styles.logo_image}
            source={image !== '' ? {uri: image} : Img}
          />
        </View>
        <View style={styles.userName_wrapped}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.name}>Hi! {dataUser?.name}</Text>
          </TouchableOpacity>
        <Text style={styles.username}>@{dataUser?.username}</Text>
        </View>
        <View style={styles.TabsOptions}>
          <TouchableOpacity onPress={() => setTabs('Review')}>
            <Text
              style={
                tabs === 'Review'
                  ? styles.TabsOptions_text_focussed
                  : styles.TabsOptions_text
              }>
              Review
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTabs('Watchlist')}>
            <Text
              style={
                tabs === 'Watchlist'
                  ? styles.TabsOptions_text_focussed
                  : styles.TabsOptions_text
              }>
              Watchlist
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
        {tabs === 'Review' ? (
          <View style={styles.TabsOptions_show_myReview}>
            <MyReviewComponent />
          </View>
        ) : (
          <View style={styles.TabsOptions_show_watchlist}>
            <MyWatchlistComponent />
          </View>
        )}
        </View>
        <View style={{position:'relative', bottom:0}}>
          <BtnLogoutComponent />
        </View>
      </View>
    </View>
  )
};

export default ProfileScreen;

const styles = StyleSheet.create({
  Wrapped: {
    backgroundColor: '#250E62',
    width: wp(100),
    flex:1
  },
  container: {
    flex: 1,
    backgroundColor: '#1D1F2A',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: wp(100),
  },
  logo_imageWrapped: {
    marginTop: hp(5),
  },
  logo_image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  userName_wrapped: {
    margin: 20,
    justifyContent:'center',
    alignItems:'center',
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  TabsOptions: {
    flexDirection: 'row',
    width: wp(100),
    padding: wp(3),
    justifyContent: 'center',
  },
  TabsOptions_text: {
    marginRight: 20,
    fontSize: 18,
    color: '#fff',
  },
  TabsOptions_text_focussed: {
    marginRight: 20,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  TabsOptions_show_myReview: {
    width: wp(95),
    flex:1,
    borderTopColor:'#ffffff',
    borderTopWidth:1

  },
  TabsOptions_show_watchlist: {
    width: wp(95),
    backgroundColor: '#fff',
  },
});
