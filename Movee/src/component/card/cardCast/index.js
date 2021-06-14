import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

const index = () => {
  const detailsMovie = useSelector(state => state.movieReducer.details.casts);
  useEffect(() => {
    // console.log('ini details movie', detailsMovie);
  }, [detailsMovie]);

  return (
    <View style={styles.container}>
      <Text style={styles.Cast}>Casts</Text>
      <View style={styles._line}></View>
      <FlatList
        data={detailsMovie}
        renderItem={({item}) => {
          //console.log('iya item', item);
          return (
            <View style={styles.CastWrapped}>
              <Image
                source={{
                  uri: 'https://team-d.gabatch11.my.id' + item.image,
                }}
                style={styles.CastImage}
              />
              <View style={styles.CastNameWrapped}>
                <Text style={styles.CastName}>{item.name}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item._id}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    width: wp(95),
    margin: 16,
    flexDirection: 'column',
    marginVertical: 5,
    padding: 2,
  },
  Cast: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#ffffff',
  },
  _line: {
    borderWidth: 0.3,
    borderColor: '#ffffff',
    marginBottom: 5,
    width: wp(95),
  },
  CastWrapped: {
    marginTop: 10,
    padding: 5,
    width: wp(30),
    backgroundColor: '#444',
    alignItems: 'center',
    marginRight: 10,
  },
  CastImage: {
    width: wp(28),
    height: hp(20),
  },
  CastNameWrapped: {
    backgroundColor: '#250E62',
    marginTop: 3,
    width: wp(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  CastName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
