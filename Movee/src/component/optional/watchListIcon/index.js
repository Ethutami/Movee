import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const index = data => {
  //console.log('ini data', data);
  const [watchList, setWatchList] = useState(false);
  const [icon, setIcon] = useState({
    name: '',
    color: '',
  });

  useEffect(() => {
    watchList
      ? setIcon({name: 'bookmark', color: '#fff'})
      : setIcon({name: 'bookmark-o', color: '#fff'});
  }, [watchList]);
  return (
    <View style={{marginHorizontal: 4}}>
      <FontAwesome
        name={icon.name}
        color={icon.color}
        size={30}
        onPress={() => setWatchList(!watchList)}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
