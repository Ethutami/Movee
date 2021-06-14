import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const index = () => {
  const [favorites, setFavorites] = useState(false);
  const [icon, setIcon] = useState({
    name: '',
    color: '',
  });
  useEffect(() => {
    favorites
      ? setIcon({name: 'favorite', color: '#fff'})
      : setIcon({name: 'favorite-outline', color: '#fff'});
  }, [favorites]);

  return (
    <View style={{marginRight: 2}}>
      <MaterialIcons
        name={icon.name}
        color={icon.color}
        size={30}
        onPress={() => setFavorites(!favorites)}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
