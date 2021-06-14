import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Search_icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {request_movie_search} from '../../redux/action/actionMovie';

const index =  () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  return (
    <>
      <View style={styles.searchComponet}>
        <Search_icon
          name="search1"
          size={13.68}
          color="#444444"
          onPress={ async () => {
            await dispatch(request_movie_search(text));
              navigation.navigate('Search');
          }}
        />
        <TextInput
          style={{
            backgroundColor: '#ffffff',
            color: '#444444',
            width: wp(85),
            height: 36,
          }}
          placeholder="Search movies"
          onChangeText={ChangeText => setText(ChangeText)}
        />
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  searchComponet: {
    margin: 10,
    paddingHorizontal: 8,
    width: wp(95),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffff',
    borderRadius: 10,
  },
});
