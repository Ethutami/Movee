import React, { useEffect, useState } from 'react';
import {ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import SearchComponet from '../component/search';
import ActionTabComponent from '../component/tabGenre';
import CardPreviewComponent from '../component/card/CardPreview';
import {useDispatch} from 'react-redux';
import {
  request_data_genre,
  request_data_movie,
} from '../redux/action/actionMovie';
import { request_all_my_reviews } from '../redux/action/actionReviews';
import { getData } from '../Storage';


const HomeScreen =  ({navigation}) => {
  const dispatch = useDispatch();
  const token =  getData('access_token')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(request_data_movie());
    dispatch(request_data_genre('tes'));
    dispatch(request_all_my_reviews())
  }, [token])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#250E62',
        height: hp(100),
        width: wp(100),
      }}>
      <View style={styles.container}>
        <SearchComponet />
        <View style={styles.tabsGenreOptions}>
          <Text style={styles.genreText}>Best Genre</Text>
          <ActionTabComponent />
        </View>
        <CardPreviewComponent />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp(100),
    width: wp(100),
    backgroundColor: '#1D1F2A',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  tabsGenreOptions: {
    marginVertical: 8,
    flexDirection: 'column',
    width: wp(95),
  },
  genreText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
});
