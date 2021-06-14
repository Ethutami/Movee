import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {request_movie_details} from '../../../redux/action/actionMovie';

import WatchListIconComponent from '../../optional/watchListIcon';
import ShareIconComponent from '../../optional/shareIcon';

const index =  () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dataMovie =  useSelector(state => state.movieReducer.movie);
  const title =  useSelector(state => state.movieReducer.title);

  useEffect(() => {
    //console.log('ini data movie', dataMovie);
  }, [dataMovie]);
  useEffect(() => {}, [title]);

  if (dataMovie){
    const Item = ({item}) => {
      const [lines, setLines] = useState(Array(item.synopsis.length).fill('hide'))
      return (
        <View style={styles.cardList}>
          <Image
            source={{uri: 'https://team-d.gabatch11.my.id' + item.poster}}
            style={styles.cardList_Image}
          />
          <TouchableOpacity
            onPress={  () => {
               dispatch(request_movie_details(item.id));
                navigation.navigate('Detail');
            }}>
            <Text style={styles.movie_title}>{item.title}</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text>Rating</Text>
            <View style={styles.componentIcon}>
              <WatchListIconComponent />
              <ShareIconComponent />
            </View>
          </View>
          <Text style={{fontSize: 18, color: '#fff'}}>{item.releaseYear}</Text>
          <Text 
            style={styles.sinopsis} 
            numberOfLines={lines[index] == 'show' ? 99 : 3}
            >{item.synopsis}</Text>
        </View>
      );
    };
    const renderItem = ({item}) => {
      return <Item item={item} />;
    };
    return (
      <View style={styles.cardListWrapped}>
        <Text style={styles.title}>{`Hot ${title} Movies`}</Text>
        <FlatList
          data={dataMovie}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal={false}
          //showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }else{
    return (
      <View style={styles.cardList}>
      </View>
    );
  }
};

export default index;

const styles = StyleSheet.create({
  cardListWrapped: {
    width: wp(95),
    flex:1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardList: {
    width: wp(95),
    height: hp(50),
    backgroundColor: '#444',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 2,
    flexDirection: 'column',
  },
  cardList_Image: {
    width: wp(90),
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  movie_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  sinopsis: {
    fontSize: 12,
    marginVertical: 10,
    color: '#fff',
    height: hp(20),
    textAlign: 'justify',
  },
  componentIcon: {
    backgroundColor: '#555',
    flexDirection: 'row',
    width: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
