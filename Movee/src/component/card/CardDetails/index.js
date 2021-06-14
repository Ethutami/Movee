import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';

const index = () => {
  const detailsMovie = useSelector(state => state.movieReducer.details);
  const genres = useSelector(state => state.movieReducer.genre)
  const [playing, setPlaying] = useState(false);
  const [category, setCategory] = useState('')


  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  useEffect(() => { 
    //console.log('ini details', detailsMovie.category.name);
  }, [detailsMovie]);

  return (
    <View style={styles.cardWrapped}>
      <YoutubePlayer
        width={wp(90)}
        height={hp(25)}
        play={playing}
        //videoId={detailsMovie.trailer}
        onChangeState={onStateChange}
      />
      <View style={styles.title}>
        <Text style={styles.title_txt}>
          {`${detailsMovie?.title} (${detailsMovie?.releaseYear})`}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <View>
            <Text style={styles.textGenres}>{detailsMovie?.category?.name}</Text>
            <Text>rating</Text>
          </View>
        </View>
      </View>
      <View style={styles._line}></View>
      <View style={styles.desc}>
        <Image
          source={{
            uri: 'https://team-d.gabatch11.my.id' + detailsMovie?.poster,
          }}
          style={styles.desc_image}
        />
        <View style={styles.desc_Description}>
          <Text style={styles.desc_Description_txt}>
            {detailsMovie?.synopsis}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  cardWrapped: {
    width: wp(95),
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'column',
    width: wp(90),
    marginTop: 15,
  },
  title_txt: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#ffffff',
  },
  textGenres: {
    fontSize: 15,
    color: '#ffffff',
  },
  _line: {
    borderWidth: 0.5,
    borderColor: '#ffffff',
    marginBottom: 5,
    width: wp(90),
  },
  desc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
  },
  desc_image: {
    width: wp(35),
    height: hp(30),
  },
  desc_Description: {
    width: wp(53),
    height: hp(30),
    flexDirection: 'column',
  },
  desc_Description_txt: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'justify',
    flex: 1,
  },
});
