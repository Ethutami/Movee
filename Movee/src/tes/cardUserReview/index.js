import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import editBtn from '../../asset/images/Edit_Button.png';
import deleteBtn from '../../asset/images/delete_button.png';

const index = () => {
  const Item = item => {
    return (
      <View style={styles.cardWrapped}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../asset/images/image.png')}
            style={styles._image}
          />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <View style={{flex: 1}}>
              <Text styles={styles._title}>Parasite (2019)</Text>
              <Text style={styles._date}>Reviewed February 24, 2020</Text>
              <Text>rated</Text>
            </View>
            <View
              style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
              <Image source={editBtn} style={styles._Btn} />
              <Image source={deleteBtn} style={styles._Btn} />
            </View>
          </View>
        </View>
        <Text style={styles.status}>Great! Daebak!!!</Text>
        <Text style={styles.desc}>
          Unbelievable! Great movie! I’m lovin' it! Maybe, I think, someday
          another country will remake this movie.
        </Text>
      </View>
    );
  };
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };
  return (
    <View>
      <FlatList data={''} keyExtractor={''} renderItem={renderItem} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  cardWrapped: {
    width: wp(90),
    height: hp(35),
    borderRadius: 20,
    padding: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  _image: {
    width: wp(30),
    height: hp(20),
    marginRight: 10,
  },
  _title: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  _date: {
    color: '#000000',
    fontSize: 14,
  },
  _Btn: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  status: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  desc: {
    color: '#000000',
    fontSize: 12,
  },
});
