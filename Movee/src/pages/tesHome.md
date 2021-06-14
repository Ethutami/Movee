import React, {useEffect} from 'react';
import {
View,
Text,
SafeAreaView,
Image,
FlatList,
TouchableOpacity,
StyleSheet,
ScrollView,
} from 'react-native';
import Icon_menu from 'react-native-vector-icons/Entypo';
import Icon_search from 'react-native-vector-icons/EvilIcons';
import {
widthPercentageToDP as wp,
heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {request_data, setLoadingRequest} from '../redux/action';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
const popular = useSelector(state => state.popular);
const loading = useSelector(state => state.loading);
console.log('ini popular', loading);

const dispatch = useDispatch();
useEffect(() => {
dispatch(setLoadingRequest());
dispatch(request_data('popular'));
setTimeout(() => {
dispatch(setLoadingRequest());
}, 3000);
}, []);

useEffect(() => {
console.log(popular);

<!-- }, [popular]); -->

const renderItem = ({item}) => {
return (

<!-- <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
          style={{width: wp(45), height: hp(45), marginHorizontal: 2}}
        />
        <Text>{item.title}</Text>
      </View> -->

);
};
// if (popular.length < 1 && typeof popular !== 'object') {

  <!-- //   return <Text>loading</Text>; -->

// }

return (

<!-- <SafeAreaView style={{flex: 1, backgroundColor: '#1C0113'}}>
      <View style={styles.header}>
        <Icon_menu name="menu" size={30} color="#F03C02" />
        <Image
          //source={require('./assets/Images/movie.png')}
          style={{width: wp(60), height: hp(5)}}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon_search name="search" size={25} color="#F03C02" />
        </TouchableOpacity>
      </View>
      <View style={{margin: 10}}>
        <ScrollView>
          <Text style={styles.selectContent}>Popular</Text>
          <FlatList
            data={popular}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </View>
    </SafeAreaView> -->

);
};
const styles = StyleSheet.create({
header: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'baseline',
paddingVertical: 10,
backgroundColor: '#11000C',
},
selectContent: {
fontSize: 20,
color: '#F03C02',
paddingVertical: 8,
},
});

export default Home;

// let c = [];
// dataMovie.map(e => {
// if (e.reviews[0]) {
// c.push(e.reviews);
// }
// });
