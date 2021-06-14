import React from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import user from '../../../asset/images/user.png';
import CardAddUserReview from '../CardaddUserReveview';

const index = () => {
  const detailsMovie = useSelector(state => state.movieReducer.details);
  console.log('lihat reviews', detailsMovie);
  const Show = () => {
    if (detailsMovie.reviews){
      if (detailsMovie.reviews.length !== 0) {
        const renderItem = ({item}) => {
         // console.log(item);
          return (
            <View style={styles.cardList}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={ item.userId.image ? { 
                    uri:'https://team-d.gabatch11.my.id' + item.userId ,
                  } : user}
                  style={styles.cardList_user}
                />
                <View style={{flexDirection: 'column', marginStart: 10}}>
                  <Text style={styles.reviewer}>{item.rating}</Text>
                  <Text
                    style={
                      styles.reviewer
                    }>{`Create by ${item.userId} on ${item.createdAt}`}</Text>
                </View>
              </View>
              <View style={{marginTop:10}}>
              <Text style={styles.cardList_txt}>{item.review}</Text>
              </View>
            </View>
          );
        };
        return (
          <FlatList
            data={detailsMovie.reviews}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        );
      } else {
        return (
          <View style={styles.cardList}>
            <Text style={styles.cardList_txt}>tidak ada riview nih</Text>
            <View style={styles.Review_line}></View>
          </View>
        );
      }
    }else{
      return (
        <View style={styles.cardList}>
          <Text style={styles.cardList_txt}>tidak ada riview nih</Text>
          <View style={styles.Review_line}></View>
        </View>
      );
    }


 }
  return (
    <View style={styles.container}>
      <Text style={styles.ReviewTitle}>All Review</Text>
      <View style={styles._line}></View>
      <CardAddUserReview />
      {Show()}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    width: wp(95),
    margin: wp(5),
    flexDirection: 'column',
    marginVertical: 5,
    padding: 2,
    marginTop: 15,
  },
  ReviewTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
  },
  _line: {
    borderWidth: 0.3,
    borderColor: '#fff',
    marginBottom: 5,
    width: wp(95),
  },

  Review_line: {
    borderWidth: 0.5,
    borderColor: '#fff',
    marginBottom: 5,
    width: wp(90),
    elevation: 3,
  },
  cardList: {
    width: wp(95),
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3D3B4B',
  },
  cardList_txt: {
    color: '#fff',
    fontSize: 12,
  },
  cardList_user: {
    height: 40,
    width: 40,
  },
  reviewer: {
    fontSize: 12,
    color: '#fff',
  },
});
