import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {request_movie_details} from '../redux/action/actionMovie';

import SearchComponent from '../component/search';
import WatchListIconComponet from '../component/optional/watchListIcon';

const SearchScreen = ({}) => {
  const navigation = useNavigation();
  const searchMovie = useSelector(state => state.movieReducer.search);
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    //console.log('isi item poster apa sih', item.poster);
    return (
      <View style={styles.movie}>
        <TouchableOpacity
          onPress={() => {
            dispatch(request_movie_details(item.id));
            navigation.navigate('Detail');
          }}>
          <Image
            source={{
              uri: 'https://team-d.gabatch11.my.id' + item.poster,
            }}
            style={styles.cardList_Image}
          />
          <View style={styles.MovieTitleWrapped}>
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.iconMark}>
          <WatchListIconComponet />
        </View>
      </View>
    );
  };

  useEffect(() => {
    // console.log('udah dapat ?', searchMovie);
  }, [searchMovie]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#250E62',
        height: hp(100),
        width: wp(100),
      }}>
      <View style={styles.container}>
        <SearchComponent />
        <FlatList
          data={searchMovie}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

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
  movie: {
    width: wp(45),
    height: hp(32),
    backgroundColor: '#444',
    marginLeft: wp(4),
    marginVertical: hp(0.5),
    alignItems: 'center',
    padding: 2,
  },
  cardList_Image: {
    width: wp(44),
    height: hp(24.5),
  },
  MovieTitleWrapped: {
    backgroundColor: '#250E62',
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconMark: {
    height: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 5,
    right: 10,
  },
});
