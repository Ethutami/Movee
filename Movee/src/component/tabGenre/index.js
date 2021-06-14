import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Tv_icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  request_data_by_id,
  request_data_movie,
  request_title,
} from '../../redux/action/actionMovie';

const action = () => {
  const genre =  useSelector(state => state.movieReducer.genre);
  const dispatch = useDispatch();
 
  const renderItem = ({item}) => {
    // console.log(item);
    return (
      <TouchableOpacity
        style={styles.Tab}
        onPress={ () => {
           dispatch(request_title(item.name));
          if (item.id === 'all') {
            dispatch(request_data_movie());
          } else {
            dispatch(request_data_by_id(item._id));
          }
        }}>
        <View style={styles.actionTabOpacity}>
          <Tv_icon name="live-tv" size={13} color="#fff" />
          <Text style={styles.tabsText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect( () => {}, [genre])

  if(genre){
    return (
      <View style={styles.tabsWrapped}>
        <FlatList
          data={genre}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.tabsWrapped}>
        <View style={styles.Tab}></View>
        <View style={styles.Tab}></View>
        <View style={styles.Tab}></View>
        <View style={styles.Tab}></View>
      </View>
    );
  }

};

export default action;

const styles = StyleSheet.create({
  tabsWrapped: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444',
    width: 78,
    height: 37,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 5,
  },
  Tab_actived: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#250e62',
    width: 75,
    height: 32,
    padding: 4,
    borderRadius: 6,
  },
  actionTabOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tv_icon: {
    width: 12.5,
    height: 14.78,
  },
  tabsText: {
    margin: 5,
    fontSize: 12,
    color: '#fff',
  },
});
