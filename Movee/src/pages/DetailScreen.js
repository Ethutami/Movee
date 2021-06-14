import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Search from '../component/search';
import CardDetailsComponent from '../component/card/CardDetails';
import CardCastComponent from '../component/card/cardCast';
import CardReviewComponent from '../component/card/CardReviewList';

const DetailScreen = ({navigation}) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#250E62',
        width: wp(100),
      }}>
      <View style={styles.container}>
        <Search />
        <CardDetailsComponent />
        <CardCastComponent />
        <CardReviewComponent />
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    padding: 10,
    backgroundColor: '#1D1F2A',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
