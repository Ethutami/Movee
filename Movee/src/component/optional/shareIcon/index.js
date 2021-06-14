import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Share_icon from 'react-native-vector-icons/Foundation';
import {useSelector} from 'react-redux';

const index = () => {
  const dataMovie = useSelector(state => state.movie);

  const ShareOpen = itm => {
    let title = itm.title;
    let des = itm.description;
    let date = itm.time;
    let a = `title : ${title} \ndescription : ${des} \nDate : ${date}`;
    const options = {
      title: 'bagikan melalui',
      message: a,
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  useEffect(() => {
    //console.log('ini datamovie', dataMovie);
  }, [dataMovie]);
  return (
    <View style={{marginLeft: 5}}>
      <Share_icon
        name="share"
        size={30}
        color={'#fff'}
        //onPress={() => ShareOpen(item)}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
